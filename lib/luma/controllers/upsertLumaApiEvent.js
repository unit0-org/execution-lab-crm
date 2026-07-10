import { upsertEvent } from '@/lib/event/controllers/upsertEvent'

// Find-or-create our OwnEvent from a Luma API event object. Luma may nest
// the event under an `event` key (calendar list entries do).
export function upsertLumaApiEvent(apiEvent) {
  const e = apiEvent.event || apiEvent

  return upsertEvent({ title: e.name, url: e.url, date: e.start_at })
}
