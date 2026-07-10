import { lumaFetch } from './client'

// Fetch one Luma event by its api id. Luma wraps it under `event`.
export async function getLumaEvent(eventId) {
  const res = await lumaFetch('/v1/events/get', { event_id: eventId })

  return res.event || res
}
