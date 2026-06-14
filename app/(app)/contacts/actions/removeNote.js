'use server'

import { removeNote } from '@/lib/contact/controllers/removeNote'
import { withMember } from '@/lib/auth/withMember'

export const removeNoteAction = withMember(
  (formData) =>
    removeNote(formData.get('id'))
)
