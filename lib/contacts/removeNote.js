import { ContactNote } from '@/lib/db/models'

export async function removeNote(id) {
  await ContactNote.destroy({ where: { id } })

  return { ok: true }
}
