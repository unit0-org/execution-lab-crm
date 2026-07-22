import { z } from 'zod'
import { updateCompany } from '@/lib/company/controllers/updateCompany'
import { companyUpdateFields } from './companyUpdateFields'
import { toolResult } from '../toolResult'

const schema = {
  id: z.string().describe('The company UUID.'),
  name: z.string().optional().describe('New name.'),
  legalName: z.string().optional().describe('New legal name.'),
  address: z.string().optional().describe('New billing address.'),
  businessNumber: z.string().optional().describe('New business number.'),
  invoiceEmail: z.string().optional().describe('New invoice email.'),
  website: z.string().optional().describe('New website URL.')
}

// MCP tool: update a company's details.
export function registerUpdateCompany(server) {
  server.tool(
    'update_company',
    'Update a company: any of name, legal name, address, business ' +
      'number, invoice email, website.',
    schema,
    async (a) => toolResult(await updateCompany(a.id, companyUpdateFields(a)))
  )
}
