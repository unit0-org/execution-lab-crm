'use server'

import { mergeContacts } from '@/lib/contact/controllers/merge'
import { withMember } from '@/lib/auth/withMember'
import { refreshSidebarCounts } from '@/app/(app)/refreshSidebarCounts'

export const mergeContactsAction = withMember(async (winnerId, loserIds) => {
  const merged = await mergeContacts(winnerId, loserIds)
  refreshSidebarCounts()

  return merged
})
