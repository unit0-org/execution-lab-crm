'use server'

import { withOwner } from '@/lib/auth/withOwner'
import { revokeFounderInvite } from '@/lib/org/controllers/revokeFounderInvite'

export const revokeFounderInviteAction = withOwner((user, id) =>
  revokeFounderInvite(id))
