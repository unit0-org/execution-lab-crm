import { z } from 'zod'
import { removePhone } from '@/lib/contact/controllers/removePhone'
import { toolResult } from '../toolResult'

// MCP tool: remove a contact phone by its id.
export function registerRemovePhone(server) {
  server.tool(
    'remove_phone',
    'Remove a phone by its record id (the phone row, not the contact).',
    { id: z.string().describe('The phone record UUID (not the contact id).') },
    async ({ id }) => toolResult(await removePhone(id))
  )
}
