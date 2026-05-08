import { fetchEvents } from '@/lib/google/calendar/events'
import { refreshAccessToken } from '@/lib/google/tokens'
import { upsertEventMeeting } from './upsertEventMeeting'
import { upsertEventAttendees } from './upsertEventAttendees'
import { calendarCursor, bumpCalendarCursor } from './cursor'

const PAGE = 25

async function persistOne(supabase, ev) {
  const meetingId = await upsertEventMeeting(supabase, ev)
  if (meetingId) await upsertEventAttendees(supabase, meetingId, ev.attendees)
}

async function flush(supabase, buf) {
  await Promise.all(buf.map((e) => persistOne(supabase, e)))
  return buf.length
}

export async function syncCalendarAccount(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)
  const since = calendarCursor(account)

  let buf = []; let events = 0
  for await (const ev of fetchEvents(access_token, since)) {
    buf.push(ev)
    if (buf.length >= PAGE) { events += await flush(supabase, buf); buf = [] }
  }
  if (buf.length) events += await flush(supabase, buf)

  await bumpCalendarCursor(supabase, account.id)
  return { events }
}
