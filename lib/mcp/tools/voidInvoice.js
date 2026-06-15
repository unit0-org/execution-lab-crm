import { z } from 'zod'
import { voidInvoice } from '@/lib/invoice/controllers/voidInvoice'
import { toolResult } from '../toolResult'
import { guardDestructive } from '../guardDestructive'
import { confirmField } from '../confirmField'

// MCP tool: void an invoice issued in error.
export function registerVoidInvoice(server) {
  server.tool(
    'void_invoice',
    'Void an invoice that was issued in error.',
    { id: z.string().describe('The invoice UUID.'), confirm: confirmField },
    async ({ id, confirm }) => {
      const blocked = guardDestructive('void this invoice', confirm)

      if (blocked) return blocked

      return toolResult(await voidInvoice(id))
    }
  )
}
