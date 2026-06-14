'use server'

import { addNote } from '@/lib/contact/controllers/addNote'
import { withMember } from '@/lib/auth/withMember'

export const addNoteAction = withMember((formData) => {
  const contactId = formData.get('contact_id')
  const notedAt = formData.get('noted_at') || null

  return addNote(contactId, formData.get('body'), notedAt)
})
