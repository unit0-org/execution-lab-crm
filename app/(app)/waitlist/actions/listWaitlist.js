'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { listWaitlist } from '@/lib/waitlist/controllers'

export const listWaitlistAction = withOrg(
  (organizationId) => listWaitlist(organizationId),
  []
)
