import { OwnEvent, EventType } from '../models'

// Update an event's fields. `url` is only touched when it is passed.
export async function updateEvent(organizationId, id, fields) {
  const patch = await buildEventPatch(organizationId, fields)

  await OwnEvent.update(patch, {
    where: { id, organization_id: organizationId }
  })

  return { ok: true }
}

async function buildEventPatch(organizationId, { title, date, type, url }) {
  const event_type_id = await EventType.findIdByName(organizationId, type)
  const patch = { title, date, event_type_id }

  if (url !== undefined) patch.url = url

  return patch
}
