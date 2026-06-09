import { ContactNote } from '@/lib/db/models'

export async function addNote(contactId, body) {
  if (!body) return { error: 'A note is required' }

  await ContactNote.create({ contact_id: contactId, body })

  return { ok: true }
}
