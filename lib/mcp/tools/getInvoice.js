import { z } from 'zod'
import { getInvoice } from '@/lib/invoice/controllers/getInvoice'
import { toolResult } from '../toolResult'

// MCP tool: fetch one invoice with its line items and totals.
export function registerGetInvoice(server) {
  server.tool(
    'get_invoice',
    'Get one invoice by id with its line items and totals.',
    { id: z.string().describe('The invoice UUID.') },
    async ({ id }) => toolResult(await getInvoice(id))
  )
}
