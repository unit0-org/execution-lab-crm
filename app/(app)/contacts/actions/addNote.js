'use server'

import { addNote } from '@/lib/contacts/addNote'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function addNoteAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const contactId = formData.get('contact_id')

  return addNote(m.organizationId, contactId, formData.get('body'))
}
