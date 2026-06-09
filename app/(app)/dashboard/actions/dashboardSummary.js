'use server'

import { dashboardSummary } from '@/lib/dashboard/controllers/dashboardSummary'
import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { emptySummary } from './emptySummary'

export async function dashboardSummaryAction() {
  const m = await currentMembership()

  if (!m) return emptySummary()

  return dashboardSummary(m.organizationId)
}
