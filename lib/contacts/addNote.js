import { ContactNote } from '@/lib/db/models'
import { contactInOrg } from './contactInOrg'

export async function addNote(organizationId, contactId, body) {
  if (!body) return { error: 'A note is required' }

  if (!await contactInOrg(organizationId, contactId)) return { ok: true }

  await ContactNote.create({ contact_id: contactId, body })

  return { ok: true }
}
