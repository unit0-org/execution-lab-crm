import { ContactNote } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'

export async function updateNote(organizationId, id, body, notedAt) {
  if (!body) return { error: 'A note is required' }

  if (!await ownedByOrg(ContactNote, id, organizationId)) return { ok: true }

  const update = { body }

  if (notedAt) update.noted_at = notedAt

  await ContactNote.update(update, { where: { id } })

  return { ok: true }
}
