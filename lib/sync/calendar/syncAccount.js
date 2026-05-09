import { syncEvents } from '@/lib/google/calendar/events'
import { refreshAccessToken } from '@/lib/google/tokens'
import { upsertEventMeeting } from './upsertEventMeeting'
import { upsertEventAttendees } from './upsertEventAttendees'
import { deleteEvent } from './deleteEvent'
import { bumpCalendarCursor } from './cursor'
import { mapWithLimit } from '@/lib/util/mapWithLimit'
import { bump } from '../progress'

const CONCURRENCY = 6
const FLUSH = 25

const isCancelled = (ev) => ev?.status === 'cancelled'

async function persistOne(supabase, ev) {
  if (isCancelled(ev)) return deleteEvent(supabase, ev)
  const meetingId = await upsertEventMeeting(supabase, ev)
  if (meetingId) await upsertEventAttendees(supabase, meetingId, ev.attendees)
}

async function flush(supabase, accountId, buf, totals) {
  await mapWithLimit(buf, CONCURRENCY, (e) => persistOne(supabase, e))
  totals.events += buf.length
  await bump(supabase, accountId, { sync_calendar_done: totals.events })
}

async function persistToken(supabase, accountId, token) {
  if (!token) return
  await supabase.from('google_accounts').update({ calendar_sync_token: token }).eq('id', accountId)
}

export async function syncCalendarAccount(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)
  const totals = { events: 0 }
  let buf = []
  const onItem = async (ev) => {
    buf.push(ev)
    if (buf.length >= FLUSH) { await flush(supabase, account.id, buf, totals); buf = [] }
  }

  let result = await syncEvents(access_token, account.calendar_sync_token, onItem)
  if (result.expired) {
    await persistToken(supabase, account.id, null)
    result = await syncEvents(access_token, null, onItem)
  }
  if (buf.length) await flush(supabase, account.id, buf, totals)
  await persistToken(supabase, account.id, result.nextSyncToken)
  await bumpCalendarCursor(supabase, account.id)
  return { events: totals.events }
}
