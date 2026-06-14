import { z } from 'zod'
import { addEmail } from '@/lib/contact/controllers/addEmail'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: add an email address to a contact.
export function registerAddEmail(server) {
  server.tool(
    'add_email',
    'Add an email to a contact (a contact may have several).',
    {
      contactId: z.string().describe('The contact UUID.'),
      email: z.string().describe('Email address to add.')
    },
    async ({ contactId, email }) =>
      toolResult(await addEmail(
        await firstOrganizationId(), contactId, email
      ))
  )
}
