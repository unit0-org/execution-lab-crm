import { z } from 'zod'
import { sendInvoices } from '@/lib/invoice/controllers/sendInvoices'
import { toolResult } from '../toolResult'

// MCP tool: send several approved invoices in one call.
export function registerSendInvoices(server) {
  server.tool(
    'send_invoices',
    'Send several invoices by id; reports how many succeeded or failed.',
    { ids: z.array(z.string()).describe('Invoice UUIDs to send.') },
    async ({ ids }) => toolResult(await sendInvoices(ids))
  )
}
