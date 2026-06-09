'use server'

import { withOwner } from '@/lib/auth/withOwner'
import { listFounderInvites } from '@/lib/org/controllers/listFounderInvites'

export const listFounderInvitesAction = withOwner(
  () => listFounderInvites(),
  []
)
