import { getAccountByEmail } from '@/lib/google/controllers/getAccountByEmail'
import { getAccessToken } from '@/lib/google/getAccessToken'
import { listCalendarEvents } from '@/lib/google/listCalendarEvents'
import { importCalendarEvent } from './importCalendarEvent'
import { since } from './since'

const SYNC_DAYS = 90

// Pull recent meetings (those with at least one other attendee) from the
// user's Google Calendar and link their attendees to contacts.
export async function syncMeetings(email) {
  const account = await getAccountByEmail(email)

  if (!account) return { error: 'google_not_connected' }

  const token = await getAccessToken(account.refresh_token)
  const events = await listCalendarEvents(token, since(SYNC_DAYS))
  let imported = 0

  for (const event of events) {
    const { skipped } = await importCalendarEvent(event)

    if (!skipped) imported += 1
  }

  return { imported }
}
