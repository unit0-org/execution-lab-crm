'use server'

import { updateNote } from '@/lib/contacts/updateNote'

export async function updateNoteAction(formData) {
  const id = formData.get('id')

  return updateNote(id, formData.get('body'))
}
