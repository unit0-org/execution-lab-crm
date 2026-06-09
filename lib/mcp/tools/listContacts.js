import { listContacts } from '@/lib/contacts/list'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: list every contact with names and email addresses.
export function registerListContacts(server) {
  server.tool(
    'list_contacts',
    'List all contacts (people in the CRM) with their names and emails.',
    {},
    async () =>
      toolResult(await listContacts(await firstOrganizationId()))
  )
}
