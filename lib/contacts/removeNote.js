import { ContactNote } from '@/lib/db/models'
import { ownedByOrg } from './ownedByOrg'

export async function removeNote(organizationId, id) {
  if (!await ownedByOrg(ContactNote, id, organizationId)) return { ok: true }

  await ContactNote.destroy({ where: { id } })

  return { ok: true }
}
