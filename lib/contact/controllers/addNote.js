import { ContactNote } from '@/lib/contact/models'
import { contactInOrg } from './contactInOrg'

export async function addNote(organizationId, contactId, body, notedAt) {
  if (!body) return { error: 'A note is required' }

  if (!await contactInOrg(organizationId, contactId)) return { ok: true }

  const note = { contact_id: contactId, body }

  if (notedAt) note.noted_at = notedAt

  await ContactNote.create(note)

  return { ok: true }
}
