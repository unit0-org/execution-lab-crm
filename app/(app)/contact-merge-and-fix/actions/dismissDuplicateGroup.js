'use server'

import { dismissGroup }
  from '@/lib/contact-merge-and-fix/controllers/dismissGroup'
import { withMember } from '@/lib/auth/withMember'
import { refreshSidebarCounts } from '@/app/(app)/refreshSidebarCounts'

export const dismissDuplicateGroupAction = withMember(async (contactIds) => {
  const dismissed = await dismissGroup(contactIds)
  refreshSidebarCounts()

  return dismissed
})
