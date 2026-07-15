import { ContactNote } from '@/lib/contact/models'
import { authoredBy } from './authoredBy'
import { saveNoteMentions } from './saveNoteMentions'

export async function updateNote(id, body, notedAt, mentions) {
  if (!body) return { error: 'A note is required' }

  const row = await ContactNote.findByPk(id)

  if (!authoredBy(row, mentions.actorUserId)) return { ok: true }

  const update = { body }

  if (notedAt) update.noted_at = notedAt

  await ContactNote.update(update, { where: { id } })
  await saveNoteMentions(id, row.contact_id, body, mentions)

  return { ok: true }
}
