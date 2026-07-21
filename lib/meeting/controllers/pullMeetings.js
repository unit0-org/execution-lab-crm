import { getAccessToken } from '@/lib/google/getAccessToken'
import { listCalendarEvents } from '@/lib/google/listCalendarEvents'
import { importCalendarEvent } from './importCalendarEvent'
import { since } from './since'

const SYNC_DAYS = 90

// Pull the window from 90 days ago up to now and import every qualifying
// event (those with at least one other attendee). Count newly created rows
// as imported and existing ones refreshed in place as updated.
export async function pullMeetings(refreshToken) {
  const token = await getAccessToken(refreshToken)
  const events = await listCalendarEvents(token, since(SYNC_DAYS), since(0))
  let imported = 0
  let updated = 0

  for (const event of events) {
    const { skipped, created } = await importCalendarEvent(event)

    if (skipped) continue

    if (created) imported += 1
    else updated += 1
  }

  return { imported, updated }
}
