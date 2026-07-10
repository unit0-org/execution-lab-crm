import { getLumaEvent } from '../api/getEvent'
import { upsertLumaApiEvent } from './upsertLumaApiEvent'
import { importMappedGuest } from './importMappedGuest'
import { mapApiGuest } from './mapApiGuest'

function eventIdOf(data, guest) {
  return data.event_id || data.event_api_id ||
    data.event?.api_id || guest.event_id || null
}

// A live guest webhook: resolve its event, ensure we have it, then fold
// the guest into our records. Re-fetches the event for canonical details.
export async function handleGuestWebhook(data) {
  const guest = data.guest || data
  const eventId = eventIdOf(data, guest)

  if (!eventId) throw new Error('Luma webhook missing event id')

  const { event } = await upsertLumaApiEvent(await getLumaEvent(eventId))

  return importMappedGuest(event, mapApiGuest(guest))
}
