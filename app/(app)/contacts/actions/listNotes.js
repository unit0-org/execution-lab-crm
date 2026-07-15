'use server'

import { listNotes } from '@/lib/contact/controllers/listNotes'
import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'

export const listNotesAction = withMember(async (contactId) => {
  const user = await currentUser()

  return listNotes(contactId, user.id)
}, [])
