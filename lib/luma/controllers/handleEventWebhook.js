import { getLumaEvent } from '../api/getEvent'
import { upsertLumaApiEvent } from './upsertLumaApiEvent'
import { refreshEventDetails } from './refreshEventDetails'

function eventIdOf(data, apiEvent) {
  return apiEvent.api_id || data.event_id || data.event_api_id || null
}

// An event.created / event.updated webhook: ensure we have the event, then
// keep its details current. Re-fetches the event for canonical fields.
export async function handleEventWebhook(data) {
  const apiEvent = data.event || data
  const eventId = eventIdOf(data, apiEvent)
  const full = eventId ? await getLumaEvent(eventId) : apiEvent
  const { event, created } = await upsertLumaApiEvent(full)

  if (!created) await refreshEventDetails(event, full)

  return { eventId: event.id, created }
}
