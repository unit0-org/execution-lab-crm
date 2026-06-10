'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { listCohortsWithStats } from '@/lib/cohort/controllers'

export const listCohortsAction = withOrg(
  (organizationId) => listCohortsWithStats(organizationId),
  []
)
