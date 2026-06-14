'use server'

import { listNotes } from '@/lib/contact/controllers/listNotes'
import { withMember } from '@/lib/auth/withMember'

export const listNotesAction = withMember(
  (contactId) => listNotes(contactId),
  []
)
