import { registerListContacts } from './tools/listContacts'
import { registerGetContact } from './tools/getContact'
import { registerContactActivity } from './tools/contactActivity'
import { registerListEvents } from './tools/listEvents'
import { registerListPurchases } from './tools/listPurchases'
import { registerDashboardSummary } from './tools/dashboardSummary'
import { registerSetContactCategories } from './tools/setContactCategories'

// Register every CRM tool on the MCP server instance.
export function registerTools(server) {
  registerListContacts(server)
  registerGetContact(server)
  registerContactActivity(server)
  registerListEvents(server)
  registerListPurchases(server)
  registerDashboardSummary(server)
  registerSetContactCategories(server)
}
