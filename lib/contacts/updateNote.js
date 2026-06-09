import { ContactNote } from '@/lib/db/models'

export async function updateNote(id, body, notedAt) {
  if (!body) return { error: 'A note is required' }

  const update = { body }

  if (notedAt) update.noted_at = notedAt

  await ContactNote.update(update, { where: { id } })

  return { ok: true }
}
