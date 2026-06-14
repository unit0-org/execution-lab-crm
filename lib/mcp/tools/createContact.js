import { z } from 'zod'
import { createContact } from '@/lib/contact/controllers/create'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: create a contact with a name and optional emails.
export function registerCreateContact(server) {
  server.tool(
    'create_contact',
    'Create a contact (a person in the CRM) with optional name and emails.',
    {
      firstName: z.string().optional().describe('First name.'),
      lastName: z.string().optional().describe('Last name.'),
      emails: z.array(z.string()).optional().describe('Email addresses.')
    },
    async ({ firstName, lastName, emails }) =>
      toolResult(await createContact(
        await firstOrganizationId(), firstName, lastName, emails || []
      ))
  )
}
