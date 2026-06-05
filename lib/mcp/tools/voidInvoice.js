import { z } from 'zod'
import { voidInvoice } from '@/lib/invoice/controllers/voidInvoice'
import { toolResult } from '../toolResult'

// MCP tool: void an invoice issued in error.
export function registerVoidInvoice(server) {
  server.tool(
    'void_invoice',
    'Void an invoice that was issued in error.',
    { id: z.string().describe('The invoice UUID.') },
    async ({ id }) => toolResult(await voidInvoice(id))
  )
}
