import { ContactNote } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'

export async function updateNote(id, body, notedAt) {
  if (!body) return { error: 'A note is required' }

  if (!await ownedByOrg(ContactNote, id)) return { ok: true }

  const update = { body }

  if (notedAt) update.noted_at = notedAt

  await ContactNote.update(update, { where: { id } })

  return { ok: true }
}
