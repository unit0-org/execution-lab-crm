import { OwnEvent, EventType } from '../models'

// Update an event's fields. `url` is only touched when it is passed.
export async function updateEvent(id, fields) {
  const patch = await buildEventPatch(fields)

  await OwnEvent.update(patch, {
    where: { id }
  })

  return { ok: true }
}

async function buildEventPatch({ title, date, type, url }) {
  const event_type_id = await EventType.findIdByName(type)
  const patch = { title, date, event_type_id }

  if (url !== undefined) patch.url = url

  return patch
}
