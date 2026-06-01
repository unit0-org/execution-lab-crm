import { OwnEvent } from '../models'

// Delete an event; participants, answers, and questions cascade with it.
export async function deleteEvent(id) {
  await OwnEvent.destroy({ where: { id } })

  return { ok: true }
}
