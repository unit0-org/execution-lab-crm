'use server'

import { removeNote } from '@/lib/contacts/removeNote'

export async function removeNoteAction(formData) {
  return removeNote(formData.get('id'))
}
