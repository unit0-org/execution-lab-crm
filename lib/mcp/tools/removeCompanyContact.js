import { z } from 'zod'
import { removeCompanyContact }
  from '@/lib/company/controllers/removeCompanyContact'
import { toolResult } from '../toolResult'

// MCP tool: unlink a contact from a company.
export function registerRemoveCompanyContact(server) {
  server.tool(
    'remove_company_contact',
    'Unlink a contact from a company.',
    {
      companyId: z.string().describe('The company UUID.'),
      contactId: z.string().describe('The contact UUID.')
    },
    async (a) => toolResult(
      await removeCompanyContact(a.companyId, a.contactId)
    )
  )
}
