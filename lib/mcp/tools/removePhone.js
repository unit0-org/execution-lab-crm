import { z } from 'zod'
import { removePhone } from '@/lib/contacts/removePhone'
import { toolResult } from '../toolResult'

// MCP tool: remove a contact phone by its id.
export function registerRemovePhone(server) {
  server.tool(
    'remove_phone',
    'Remove a contact phone number by its id.',
    { id: z.string().describe('The phone record UUID.') },
    async ({ id }) => toolResult(await removePhone(id))
  )
}
