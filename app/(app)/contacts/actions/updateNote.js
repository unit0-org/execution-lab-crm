'use server'

import { updateNote } from '@/lib/contact/controllers/updateNote'
import { withMember } from '@/lib/auth/withMember'

export const updateNoteAction = withMember((formData) => {
  const id = formData.get('id')
  const notedAt = formData.get('noted_at') || null

  return updateNote(id, formData.get('body'), notedAt)
})
