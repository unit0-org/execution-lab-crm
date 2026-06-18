import { ContactNote } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'
import { saveNoteMentions } from './saveNoteMentions'

export async function updateNote(id, body, notedAt, mentions) {
  if (!body) return { error: 'A note is required' }

  if (!await ownedByOrg(ContactNote, id)) return { ok: true }

  const row = await ContactNote.findByPk(id)
  const update = { body }

  if (notedAt) update.noted_at = notedAt

  await ContactNote.update(update, { where: { id } })
  await saveNoteMentions(id, row.contact_id, body, mentions)

  return { ok: true }
}
