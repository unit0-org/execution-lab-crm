'use server'

import { applyFixes }
  from '@/lib/contact-merge-and-fix/controllers/applyFixes'
import { withMember } from '@/lib/auth/withMember'

export const applyFixesAction = withMember(
  (targets) => applyFixes(targets)
)
