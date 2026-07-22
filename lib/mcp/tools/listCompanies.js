import { listCompanies } from '@/lib/company/controllers/listCompanies'
import { toolResult } from '../toolResult'

// MCP tool: list every company with its linked contacts.
export function registerListCompanies(server) {
  server.tool(
    'list_companies',
    'List all companies (invoiceable customers) with their contacts.',
    {},
    async () => toolResult(await listCompanies())
  )
}
