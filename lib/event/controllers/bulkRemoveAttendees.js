import { EventParticipant } from '../models'

// Remove many participant links at once — the attendees table bulk delete.
export async function bulkRemoveAttendees(ids) {
  await EventParticipant.destroy({ where: { id: ids } })

  return { ok: true }
}
