import { upsertEvent } from '@/lib/event/controllers/upsertEvent'
import { eventTypeFromLocation } from './eventTypeFromLocation'

// Find-or-create our OwnEvent from a Luma API event object. Luma may nest
// the event under an `event` key; its online/in-person type comes from the
// event's location fields.
export function upsertLumaApiEvent(apiEvent) {
  const e = apiEvent.event || apiEvent
  const type = eventTypeFromLocation(apiEvent)

  return upsertEvent({ title: e.name, url: e.url, date: e.start_at, type })
}
