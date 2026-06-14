'use server'

import { listNotes } from '@/lib/contact/controllers/listNotes'
import { withOrg } from '@/lib/auth/withOrg'

export const listNotesAction = withOrg(
  (organizationId, contactId) => listNotes(organizationId, contactId),
  []
)
