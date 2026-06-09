'use server'

import { addNote } from '@/lib/contacts/addNote'

export async function addNoteAction(formData) {
  const contactId = formData.get('contact_id')
  const notedAt = formData.get('noted_at') || null

  return addNote(contactId, formData.get('body'), notedAt)
}
