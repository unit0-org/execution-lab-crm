import { fetchEvents } from '@/lib/google/calendar/events'
import { refreshAccessToken } from '@/lib/google/tokens'
import { upsertEventMeeting } from './upsertEventMeeting'
import { upsertEventAttendees } from './upsertEventAttendees'
import { calendarCursor, bumpCalendarCursor } from './cursor'
import { mapWithLimit } from '@/lib/util/mapWithLimit'
import { bump } from '../progress'

const CONCURRENCY = 6
const FLUSH = 25

async function persistOne(supabase, ev) {
  const meetingId = await upsertEventMeeting(supabase, ev)
  if (meetingId) await upsertEventAttendees(supabase, meetingId, ev.attendees)
}

export async function syncCalendarAccount(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)
  const since = calendarCursor(account)

  let buf = []; let events = 0
  for await (const ev of fetchEvents(access_token, since)) {
    buf.push(ev)
    if (buf.length < FLUSH) continue
    await mapWithLimit(buf, CONCURRENCY, (e) => persistOne(supabase, e))
    events += buf.length; buf = []
    await bump(supabase, account.id, { sync_calendar_done: events })
  }
  if (buf.length) {
    await mapWithLimit(buf, CONCURRENCY, (e) => persistOne(supabase, e))
    events += buf.length
    await bump(supabase, account.id, { sync_calendar_done: events })
  }

  await bumpCalendarCursor(supabase, account.id)
  return { events }
}
