import { mergeSignals } from './mergeSignals'
import { hotLeads } from './hotLeads'
import { leadSegments } from './leadSegments'
import { dashboardStats } from './dashboardStats'

// Everything the dashboard needs in one call: stats, hot leads, segments.
export async function dashboardSummary() {
  const signals = await mergeSignals()
  const [stats, leads, segments] = await Promise.all([
    dashboardStats(signals),
    hotLeads(signals),
    leadSegments(signals)
  ])

  return { stats, hotLeads: leads, segments }
}
