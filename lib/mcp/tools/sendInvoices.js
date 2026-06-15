import { z } from 'zod'
import { sendInvoices } from '@/lib/invoice/controllers/sendInvoices'
import { toolResult } from '../toolResult'
import { guardDestructive } from '../guardDestructive'
import { confirmField } from '../confirmField'

// MCP tool: send several approved invoices in one call.
export function registerSendInvoices(server) {
  server.tool(
    'send_invoices',
    'Send several invoices by id; reports how many succeeded or failed.',
    {
      ids: z.array(z.string()).describe('Invoice UUIDs to send.'),
      confirm: confirmField
    },
    async ({ ids, confirm }) => {
      const blocked = guardDestructive('send these invoices', confirm)

      if (blocked) return blocked

      return toolResult(await sendInvoices(ids.map((id) => ({ id }))))
    }
  )
}
