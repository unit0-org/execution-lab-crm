'use server'

import { dismissGroup }
  from '@/lib/contact-merge-and-fix/controllers/dismissGroup'
import { withMember } from '@/lib/auth/withMember'

export const dismissDuplicateGroupAction = withMember(
  (contactIds) => dismissGroup(contactIds)
)
