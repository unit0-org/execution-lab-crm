import { z } from 'zod'
import { updateContact } from '@/lib/contacts/update'
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
    async ({ id, firstName, lastName, linkedinUrl }) => {
      const fields = {}

      if (firstName !== undefined) fields.first_name = firstName

      if (lastName !== undefined) fields.last_name = lastName

      if (linkedinUrl !== undefined) fields.linkedin_url = linkedinUrl || null

      return toolResult(await updateContact(id, fields))
    }
  )
}
