import { listInvoices } from '@/lib/invoice/controllers/listInvoices'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

const run = async () => listInvoices(await firstOrganizationId())

// MCP tool: list invoices (amounts in CAD), newest first.
export function registerListInvoices(server) {
  server.tool(
    'list_invoices',
    'List invoices (amounts in CAD), newest first, with their status.',
    {},
    async () => toolResult(await run())
  )
}
