import { z } from 'zod'
import { updatePhone } from '@/lib/contact/controllers/updatePhone'
import { toolResult } from '../toolResult'

// MCP tool: change an existing contact phone by its id.
export function registerUpdatePhone(server) {
  server.tool(
    'update_phone',
    'Change a phone by its record id (the phone row, not the contact).',
    {
      id: z.string().describe('The phone record UUID (not the contact id).'),
      phone: z.string().describe('New phone number.')
    },
    async ({ id, phone }) => toolResult(await updatePhone(id, phone))
  )
}
