import { Meeting } from '../models'

// Update a meeting's manually-editable fields.
export async function updateMeeting(id, fields) {
  const { title, starts_at, online } = fields

  await Meeting.update(
    { title, starts_at, online },
    { where: { id } }
  )

  return { ok: true }
}
