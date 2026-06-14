import { z } from 'zod'
import { updateContact } from '@/lib/contact/controllers/update'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { contactUpdateFields } from './contactUpdateFields'
import { toolResult } from '../toolResult'

// MCP tool: update a contact's name and/or LinkedIn URL.
export function registerUpdateContact(server) {
  server.tool(
    'update_contact',
    'Update a contact: change first/last name and/or LinkedIn URL.',
    {
      id: z.string().describe('The contact UUID.'),
      firstName: z.string().optional().describe('New first name.'),
      lastName: z.string().optional().describe('New last name.'),
      linkedinUrl: z.string().optional().describe('LinkedIn URL; "" clears.')
    },
    async (a) => toolResult(await updateContact(
      await firstOrganizationId(), a.id, contactUpdateFields(a)
    ))
  )
}
