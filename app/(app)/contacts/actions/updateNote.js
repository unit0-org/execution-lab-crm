'use server'

import { updateNote } from '@/lib/contacts/updateNote'

export async function updateNoteAction(formData) {
  const id = formData.get('id')
  const notedAt = formData.get('noted_at') || null

  return updateNote(id, formData.get('body'), notedAt)
}
