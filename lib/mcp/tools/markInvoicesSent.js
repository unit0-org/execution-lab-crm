import { z } from 'zod'
import { markInvoicesSent } from '@/lib/invoice/controllers/markInvoicesSent'
import { toolResult } from '../toolResult'

// MCP tool: mark invoices as sent without emailing (sent elsewhere).
export function registerMarkInvoicesSent(server) {
  server.tool(
    'mark_invoices_sent',
    'Record several invoices as sent without emailing them.',
    { ids: z.array(z.string()).describe('Invoice UUIDs to mark sent.') },
    async ({ ids }) => toolResult(await markInvoicesSent(ids))
  )
}
