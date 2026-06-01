import { upsertEvent } from '@/lib/event/controllers/upsertEvent'
import { eventTitleFromFileName } from './eventTitleFromFileName'
import { importGuest } from './importGuest'

// Import parsed Luma guest rows from a CSV named after its event. The
// event (and any missing contacts) are created when they don't exist.
export async function importLumaGuests(fileName, rows) {
  const title = eventTitleFromFileName(fileName)
  const event = await upsertEvent({ title })

  let imported = 0

  for (const row of rows) {
    await importGuest(event, row)
    imported += 1
  }

  return { eventId: event.id, imported }
}
