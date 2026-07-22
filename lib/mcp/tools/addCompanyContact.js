import { z } from 'zod'
import { addCompanyContact }
  from '@/lib/company/controllers/addCompanyContact'
import { COMPANY_ROLES } from '@/lib/company/models/roles'
import { toolResult } from '../toolResult'

const schema = {
  companyId: z.string().describe('The company UUID.'),
  contactId: z.string().describe('The contact UUID.'),
  role: z.enum(COMPANY_ROLES).describe('owner or employee.')
}

// MCP tool: link a contact to a company as owner or employee.
export function registerAddCompanyContact(server) {
  server.tool(
    'add_company_contact',
    'Link a contact to a company with a role (owner or employee); ' +
      'updates the role if already linked.',
    schema,
    async (a) => toolResult(
      await addCompanyContact(a.companyId, a.contactId, a.role)
    )
  )
}
