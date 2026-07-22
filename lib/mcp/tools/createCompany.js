import { z } from 'zod'
import { createCompany } from '@/lib/company/controllers/createCompany'
import { toolResult } from '../toolResult'

const schema = {
  name: z.string().describe('Company name (required).'),
  legalName: z.string().optional().describe('Legal name.'),
  address: z.string().optional().describe('Billing address.'),
  businessNumber: z.string().optional().describe('Canadian business number.'),
  invoiceEmail: z.string().optional().describe('Email for invoices.'),
  website: z.string().optional().describe('Website URL.')
}

const toData = (a) => ({
  name: a.name,
  legal_name: a.legalName || null,
  address: a.address || null,
  business_number: a.businessNumber || null,
  invoice_email: a.invoiceEmail || null,
  website: a.website || null
})

// MCP tool: create a company (an invoiceable customer).
export function registerCreateCompany(server) {
  server.tool(
    'create_company',
    'Create a company (an invoiceable customer organization).',
    schema,
    async (a) => toolResult(await createCompany(toData(a)))
  )
}
