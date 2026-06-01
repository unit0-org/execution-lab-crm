import { OwnEvent, EventType } from '../models'

// Confirm/complete a stub event: set its name, date, and type.
export async function updateEvent(id, { title, date, type }) {
  const event_type_id = await EventType.findIdByName(type)

  await OwnEvent.update(
    { title, date, event_type_id },
    { where: { id } }
  )

  return { ok: true }
}
