import { ContactNote } from '@/lib/contact/models'
import { contactInOrg } from './contactInOrg'
import { saveNoteMentions } from './saveNoteMentions'
import { dispatchNoteAdded }
  from '@/lib/automation/controllers/triggers/dispatchNoteAdded'

export async function addNote(contactId, body, notedAt, mentions) {
  if (!body) return { error: 'A note is required' }

  if (!await contactInOrg(contactId)) return { ok: true }

  const note = { contact_id: contactId, body }

  if (notedAt) note.noted_at = notedAt

  const created = await ContactNote.create(note)

  await saveNoteMentions(created.id, contactId, body, mentions)
  await dispatchNoteAdded(contactId)

  return { ok: true }
}
