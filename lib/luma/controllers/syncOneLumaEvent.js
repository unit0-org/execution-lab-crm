import { listEventGuests } from '../api/listEventGuests'
import { upsertLumaApiEvent } from './upsertLumaApiEvent'
import { importMappedGuest } from './importMappedGuest'
import { mapApiGuest } from './mapApiGuest'

// Backfill one Luma event: ensure our OwnEvent exists, then import every
// guest. Returns how many guests were processed.
export async function syncOneLumaEvent(apiEvent) {
  const e = apiEvent.event || apiEvent
  const { event } = await upsertLumaApiEvent(apiEvent)
  const guests = await listEventGuests(e.api_id || e.id)

  for (const guest of guests)
    await importMappedGuest(event, mapApiGuest(guest.guest || guest))

  return guests.length
}
