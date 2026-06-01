import { upsertEvent } from '@/lib/event/controllers/upsertEvent'
import { importGuest } from './importGuest'

// Import parsed Luma guest rows for an event, creating the event (and any
// missing contacts) when they don't exist yet. Idempotent.
export async function importLumaGuests(eventDetails, rows) {
  const event = await upsertEvent(eventDetails)

  let imported = 0

  for (const row of rows) {
    await importGuest(event, row)
    imported += 1
  }

  return { eventId: event.id, imported }
}
