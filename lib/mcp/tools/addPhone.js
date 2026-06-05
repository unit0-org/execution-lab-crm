import { z } from 'zod'
import { addPhone } from '@/lib/contacts/addPhone'
import { toolResult } from '../toolResult'

// MCP tool: add a phone number to a contact.
export function registerAddPhone(server) {
  server.tool(
    'add_phone',
    'Add a phone number to a contact.',
    {
      contactId: z.string().describe('The contact UUID.'),
      phone: z.string().describe('Phone number to add.')
    },
    async ({ contactId, phone }) =>
      toolResult(await addPhone(contactId, phone))
  )
}
