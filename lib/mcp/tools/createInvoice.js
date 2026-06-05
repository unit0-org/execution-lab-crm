import { createInvoice } from '@/lib/invoice/controllers/createInvoice'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'
import { invoiceInput } from './invoiceInput'
import { createInvoiceData } from './createInvoiceData'

const run = async (args) => {
  const org = await firstOrganizationId()

  return createInvoice(org, createInvoiceData(args))
}

// MCP tool: create a draft invoice with a single line item.
export function registerCreateInvoice(server) {
  server.tool(
    'create_invoice',
    'Create a draft invoice for a client with one line item (cents).',
    invoiceInput,
    async (args) => toolResult(await run(args))
  )
}
