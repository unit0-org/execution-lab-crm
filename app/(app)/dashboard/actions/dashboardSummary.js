'use server'

import { dashboardSummary } from '@/lib/dashboard/controllers/dashboardSummary'
import { withMember } from '@/lib/auth/withMember'
import { emptySummary } from './emptySummary'

export const dashboardSummaryAction = withMember(
  () => dashboardSummary(),
  emptySummary()
)
