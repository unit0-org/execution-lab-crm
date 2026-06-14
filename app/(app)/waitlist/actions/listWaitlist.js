'use server'

import { withMember } from '@/lib/auth/withMember'
import { listWaitlist } from '@/lib/waitlist/controllers'

export const listWaitlistAction = withMember(
  () => listWaitlist(),
  []
)
