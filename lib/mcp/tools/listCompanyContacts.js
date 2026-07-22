import { z } from 'zod'
import { companyContacts } from '@/lib/company/controllers/companyContacts'
import { toolResult } from '../toolResult'

// MCP tool: list a company's linked contacts with their role.
export function registerListCompanyContacts(server) {
  server.tool(
    'list_company_contacts',
    'List the contacts linked to a company, each with its role ' +
      '(owner or employee).',
    { companyId: z.string().describe('The company UUID.') },
    async ({ companyId }) => toolResult(await companyContacts(companyId))
  )
}
