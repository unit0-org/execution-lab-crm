import { dashboardSummary } from '@/lib/dashboard/controllers/dashboardSummary'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

const summaryForFirstOrg = async () =>
  dashboardSummary(await firstOrganizationId())

// MCP tool: dashboard KPI stats, hot leads and lead segments.
export function registerDashboardSummary(server) {
  server.tool(
    'dashboard_summary',
    'Get dashboard KPIs, hot leads, and segments (new/active/customers).',
    {},
    async () => toolResult(await summaryForFirstOrg())
  )
}
