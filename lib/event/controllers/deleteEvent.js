import { OwnEvent } from '../models'

// Delete an event; participants, answers, and questions cascade with it.
export async function deleteEvent(organizationId, id) {
  await OwnEvent.destroy({
    where: { id, organization_id: organizationId }
  })

  return { ok: true }
}
