import { ContactNote } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'

export async function removeNote(id) {
  if (!await ownedByOrg(ContactNote, id)) return { ok: true }

  await ContactNote.destroy({ where: { id } })

  return { ok: true }
}
