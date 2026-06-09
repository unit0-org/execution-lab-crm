import { mergeSignals } from './mergeSignals'
import { hotLeads } from './hotLeads'
import { leadSegments } from './leadSegments'
import { dashboardStats } from './dashboardStats'

// Everything the dashboard needs in one call: stats, hot leads, segments.
export async function dashboardSummary(organizationId) {
  const signals = await mergeSignals(organizationId)
  const [stats, leads, segments] = await Promise.all([
    dashboardStats(organizationId, signals),
    hotLeads(organizationId, signals),
    leadSegments(organizationId, signals)
  ])

  return { stats, hotLeads: leads, segments }
}
