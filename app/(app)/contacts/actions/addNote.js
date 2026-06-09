'use server'

import { addNote } from '@/lib/contacts/addNote'

export async function addNoteAction(formData) {
  const contactId = formData.get('contact_id')

  return addNote(contactId, formData.get('body'))
}
