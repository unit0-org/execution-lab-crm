'use server'

import { withMember } from '@/lib/auth/withMember'
import { acceptFromWaitlist } from '@/lib/waitlist/controllers'

export const acceptFromWaitlistAction = withMember(
  (draft) => acceptFromWaitlist(draft),
  { skipped: true }
)
