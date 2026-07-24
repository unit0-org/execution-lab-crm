import { registerListInvoices } from './listInvoices'
import { registerGetInvoice } from './getInvoice'
import { registerCreateInvoice } from './createInvoice'
import { registerApproveInvoice } from './approveInvoice'
import { registerSendInvoice } from './sendInvoice'
import { registerSendInvoices } from './sendInvoices'
import { registerMarkInvoicesSent } from './markInvoicesSent'
import { registerVoidInvoice } from './voidInvoice'

// Register every invoice tool on the MCP server.
export function registerInvoiceTools(server) {
  registerListInvoices(server)
  registerGetInvoice(server)
  registerCreateInvoice(server)
  registerApproveInvoice(server)
  registerSendInvoice(server)
  registerSendInvoices(server)
  registerMarkInvoicesSent(server)
  registerVoidInvoice(server)
}
