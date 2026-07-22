import { z } from 'zod'

// Input schema for the create_invoice MCP tool.
export const invoiceInput = {
  billToName: z.string().optional().describe('Client name.'),
  billToEmail: z.string().optional().describe('Client email.'),
  contactId: z.string().optional().describe('Existing contact id.'),
  companyId: z.string().optional()
    .describe('Existing company id (bills the company, not a contact).'),
  description: z.string().describe('Line item description.'),
  quantity: z.number().optional().describe('Line quantity (default 1).'),
  unitAmountCents: z.number().describe('Unit price in cents (CAD).')
}
