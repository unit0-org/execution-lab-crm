import { z } from 'zod'
import { removeEmail } from '@/lib/contacts/removeEmail'
import { toolResult } from '../toolResult'

// MCP tool: remove a contact email by its id.
export function registerRemoveEmail(server) {
  server.tool(
    'remove_email',
    'Remove a contact email address by its id.',
    { id: z.string().describe('The email record UUID.') },
    async ({ id }) => toolResult(await removeEmail(id))
  )
}
