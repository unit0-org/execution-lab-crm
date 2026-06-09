import { Meeting } from '../models'

// Update a meeting's manually-editable fields.
export async function updateMeeting(organizationId, id, fields) {
  const { title, starts_at, online } = fields

  await Meeting.update(
    { title, starts_at, online },
    { where: { id, organization_id: organizationId } }
  )

  return { ok: true }
}
