import { fetchEvents } from '@/lib/google/calendar/events'
import { refreshAccessToken } from '@/lib/google/tokens'
import { upsertEventMeeting } from './upsertEventMeeting'
import { upsertEventAttendees } from './upsertEventAttendees'
import { calendarCursor, bumpCalendarCursor } from './cursor'

export async function syncCalendarAccount(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)
  const since = calendarCursor(account)

  let events = 0
  for await (const ev of fetchEvents(access_token, since)) {
    const meetingId = await upsertEventMeeting(supabase, ev)
    if (meetingId) await upsertEventAttendees(supabase, meetingId, ev.attendees)
    events += 1
  }

  await bumpCalendarCursor(supabase, account.id)
  return { events }
}
