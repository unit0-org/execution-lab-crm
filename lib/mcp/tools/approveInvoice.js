import { z } from 'zod'
import { approveInvoice } from '@/lib/invoice/controllers/approveInvoice'
import { toolResult } from '../toolResult'

// MCP tool: approve a draft invoice so it is ready to send.
export function registerApproveInvoice(server) {
  server.tool(
    'approve_invoice',
    'Approve a draft invoice so it is ready to send to the client.',
    { id: z.string().describe('The invoice UUID.') },
    async ({ id }) => toolResult(await approveInvoice(id))
  )
}
