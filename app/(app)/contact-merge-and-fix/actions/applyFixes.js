'use server'

import { applyFixes }
  from '@/lib/contact-merge-and-fix/controllers/applyFixes'
import { withMember } from '@/lib/auth/withMember'
import { refreshSidebarCounts } from '@/app/(app)/refreshSidebarCounts'

export const applyFixesAction = withMember(async (targets) => {
  const applied = await applyFixes(targets)
  refreshSidebarCounts()

  return applied
})
