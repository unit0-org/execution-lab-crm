import { ContactNote } from '@/lib/db/models'
import { ownedByOrg } from './ownedByOrg'

export async function updateNote(organizationId, id, body) {
  if (!body) return { error: 'A note is required' }

  if (!await ownedByOrg(ContactNote, id, organizationId)) return { ok: true }

  await ContactNote.update({ body }, { where: { id } })

  return { ok: true }
}
