import { registerContactTools } from './tools/contactTools'
import { registerContactFieldTools } from './tools/contactFieldTools'
import { registerContactNoteTools } from './tools/contactNoteTools'
import { registerContactTaskTools } from './tools/contactTaskTools'
import { registerRelationshipTools } from './tools/relationshipTools'
import { registerMeetingTools } from './tools/meetingTools'
import { registerListEvents } from './tools/listEvents'
import { registerListPurchases } from './tools/listPurchases'
import { registerDashboardSummary } from './tools/dashboardSummary'
import { registerInvoiceTools } from './tools/invoiceTools'
import { registerCompanyTools } from './tools/companyTools'
import { registerListCronRuns } from './tools/listCronRuns'
import { registerEnrichmentTools } from './tools/enrichmentTools'
import { registerFindDuplicateContacts } from './tools/findDuplicateContacts'
import { annotateTools } from './annotateTools'
// Register every CRM tool on the MCP server instance.
export function registerTools(server) {
  annotateTools(server)

  const registrars = [
    registerContactTools, registerContactFieldTools, registerContactNoteTools,
    registerContactTaskTools, registerRelationshipTools, registerMeetingTools,
    registerListEvents, registerListPurchases, registerDashboardSummary,
    registerInvoiceTools, registerCompanyTools, registerListCronRuns,
    registerEnrichmentTools, registerFindDuplicateContacts
  ]

  registrars.forEach((register) => register(server))
}
