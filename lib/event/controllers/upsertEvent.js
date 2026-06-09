import { OwnEvent, EventType } from '../models'

// Find one of our events by URL (or title), or create it. `type` is the
// event_type name, e.g. "online" / "in-person". Returns { event, created }.
export async function upsertEvent(organizationId, { title, date, type, url }) {
  const event_type_id = await EventType.findIdByName(organizationId, type)
  const match = url ? { url } : { title }
  const [event, created] = await OwnEvent.findOrCreate({
    where: { ...match, organization_id: organizationId },
    defaults: { title, date, url, event_type_id,
      organization_id: organizationId }
  })

  return { event, created }
}
