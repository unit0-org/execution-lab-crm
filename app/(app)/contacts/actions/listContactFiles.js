'use server'

import { listContactFiles }
  from '@/lib/contact/controllers/listContactFiles'
import { withMember } from '@/lib/auth/withMember'

export const listContactFilesAction = withMember(
  (contactId) => listContactFiles(contactId),
  []
)
