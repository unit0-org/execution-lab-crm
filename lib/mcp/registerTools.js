import { registerContactTools } from './tools/contactTools'
import { registerContactFieldTools } from './tools/contactFieldTools'
import { registerRelationshipTools } from './tools/relationshipTools'
import { registerMeetingTools } from './tools/meetingTools'
import { registerListEvents } from './tools/listEvents'
import { registerListPurchases } from './tools/listPurchases'
import { registerDashboardSummary } from './tools/dashboardSummary'
import { registerInvoiceTools } from './tools/invoiceTools'

// Register every CRM tool on the MCP server instance.
export function registerTools(server) {
  registerContactTools(server)
  registerContactFieldTools(server)
  registerRelationshipTools(server)
  registerMeetingTools(server)
  registerListEvents(server)
  registerListPurchases(server)
  registerDashboardSummary(server)
  registerInvoiceTools(server)
}
