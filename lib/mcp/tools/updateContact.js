import { z } from 'zod'
import { updateContact } from '@/lib/contacts/update'
import { toolResult } from '../toolResult'

// MCP tool: update a contact's first and/or last name.
export function registerUpdateContact(server) {
  server.tool(
    'update_contact',
    'Rename a contact (change its first and/or last name).',
    {
      id: z.string().describe('The contact UUID.'),
      firstName: z.string().optional().describe('New first name.'),
      lastName: z.string().optional().describe('New last name.')
    },
    async ({ id, firstName, lastName }) => {
      const fields = {}

      if (firstName !== undefined) fields.first_name = firstName

      if (lastName !== undefined) fields.last_name = lastName

      return toolResult(await updateContact(id, fields))
    }
  )
}
