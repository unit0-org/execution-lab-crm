'use server'

import { findDuplicateGroups }
  from '@/lib/contact-merge-and-fix/controllers/findDuplicateGroups'
import { withMember } from '@/lib/auth/withMember'

export const listDuplicateGroupsAction = withMember(
  () => findDuplicateGroups()
)
