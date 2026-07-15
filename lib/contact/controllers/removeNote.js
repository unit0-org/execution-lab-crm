import { ContactNote } from '@/lib/contact/models'
import { authoredBy } from './authoredBy'

export async function removeNote(id, viewerId) {
  const row = await ContactNote.findByPk(id)

  if (!authoredBy(row, viewerId)) return { ok: true }

  await ContactNote.destroy({ where: { id } })

  return { ok: true }
}
