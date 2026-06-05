import { z } from 'zod'
import { updatePhone } from '@/lib/contacts/updatePhone'
import { toolResult } from '../toolResult'

// MCP tool: change an existing contact phone by its id.
export function registerUpdatePhone(server) {
  server.tool(
    'update_phone',
    'Update a contact phone number by its id.',
    {
      id: z.string().describe('The phone record UUID.'),
      phone: z.string().describe('New phone number.')
    },
    async ({ id, phone }) => toolResult(await updatePhone(id, phone))
  )
}
