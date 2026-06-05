import { z } from 'zod'
import { sendInvoice } from '@/lib/invoice/controllers/sendInvoice'
import { toolResult } from '../toolResult'

// MCP tool: send an approved invoice (PDF to Drive, email the client).
export function registerSendInvoice(server) {
  server.tool(
    'send_invoice',
    'Send an approved invoice: render the PDF, store it, email it.',
    { id: z.string().describe('The invoice UUID.') },
    async ({ id }) => toolResult(await sendInvoice(id))
  )
}
