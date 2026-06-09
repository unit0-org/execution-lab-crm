import { ContactNote } from '@/lib/db/models'

export async function updateNote(id, body) {
  if (!body) return { error: 'A note is required' }

  await ContactNote.update({ body }, { where: { id } })

  return { ok: true }
}
