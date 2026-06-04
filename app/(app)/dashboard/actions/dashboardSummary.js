'use server'

import { dashboardSummary } from '@/lib/dashboard/controllers/dashboardSummary'

export async function dashboardSummaryAction() {
  return dashboardSummary()
}
