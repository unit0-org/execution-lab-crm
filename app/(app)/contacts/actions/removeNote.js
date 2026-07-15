'use server'

import { removeNote } from '@/lib/contact/controllers/removeNote'
import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'

export const removeNoteAction = withMember(async (formData) => {
  const user = await currentUser()

  return removeNote(formData.get('id'), user.id)
})
