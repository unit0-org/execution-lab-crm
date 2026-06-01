import { OwnEvent } from '@/lib/event/models'
import { importGuest } from './importGuest'

// Import an array of parsed Luma guest rows into one event. Idempotent:
// re-importing updates existing contacts and participants in place.
export async function importLumaGuests(eventId, rows) {
  const event = await OwnEvent.findByPk(eventId)

  if (!event) return { error: 'event not found' }

  let imported = 0

  for (const row of rows) {
    await importGuest(event, row)
    imported += 1
  }

  return { imported }
}
