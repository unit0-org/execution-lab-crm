'use server'

import { dashboardSummary } from '@/lib/dashboard/controllers/dashboardSummary'
import { withOrg } from '@/lib/auth/withOrg'
import { emptySummary } from './emptySummary'

export const dashboardSummaryAction = withOrg(
  (organizationId) => dashboardSummary(organizationId),
  emptySummary()
)
