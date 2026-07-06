import { EventParticipant } from '../models'

// Remove a participant link by its id (the attendee row's id).
export async function removeAttendee(id) {
  await EventParticipant.destroy({ where: { id } })

  return { ok: true }
}
