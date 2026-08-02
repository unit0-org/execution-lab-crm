import { listEventGuests } from '../api/listEventGuests'
import { upsertLumaApiEvent } from './upsertLumaApiEvent'
import { importMappedGuest } from './importMappedGuest'
import { mapApiGuest } from './mapApiGuest'

// Backfill one Luma event: ensure our OwnEvent exists, then import its
// guests. Returns how many were actually imported — invite-only guests
// are skipped, so this sits below the number Luma listed.
export async function syncOneLumaEvent(apiEvent) {
  const e = apiEvent.event || apiEvent
  const { event } = await upsertLumaApiEvent(apiEvent)
  const guests = await listEventGuests(e.api_id || e.id)
  let imported = 0

  for (const guest of guests) {
    const mapped = mapApiGuest(guest.guest || guest)
    const result = await importMappedGuest(event, mapped)

    if (!result.skipped) imported += 1
  }

  return imported
}
