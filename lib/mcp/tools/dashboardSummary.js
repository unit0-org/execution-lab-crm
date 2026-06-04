import { dashboardSummary } from '@/lib/dashboard/controllers/dashboardSummary'
import { toolResult } from '../toolResult'

// MCP tool: dashboard KPI stats, hot leads and lead segments.
export function registerDashboardSummary(server) {
  server.tool(
    'dashboard_summary',
    'Get dashboard stats, hot leads and lead segments.',
    {},
    async () => toolResult(await dashboardSummary())
  )
}
