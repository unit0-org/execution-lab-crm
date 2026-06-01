import { OwnEvent, EventType } from '../models'

// Find one of our events by URL (or title), or create it. `type` is the
// event_type name, e.g. "online" / "in-person".
export async function upsertEvent({ title, date, type, url }) {
  const event_type_id = await EventType.findIdByName(type)
  const [event] = await OwnEvent.findOrCreate({
    where: url ? { url } : { title },
    defaults: { title, date, url, event_type_id }
  })

  return event
}
