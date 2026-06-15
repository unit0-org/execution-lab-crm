import { z } from 'zod'
import { approveInvoice } from '@/lib/invoice/controllers/approveInvoice'
import { toolResult } from '../toolResult'
import { guardDestructive } from '../guardDestructive'
import { confirmField } from '../confirmField'

// MCP tool: approve a draft invoice so it is ready to send.
export function registerApproveInvoice(server) {
  server.tool(
    'approve_invoice',
    'Approve a draft invoice so it is ready to send to the client.',
    { id: z.string().describe('The invoice UUID.'), confirm: confirmField },
    async ({ id, confirm }) => {
      const blocked = guardDestructive('approve this invoice', confirm)

      if (blocked) return blocked

      return toolResult(await approveInvoice(id))
    }
  )
}
