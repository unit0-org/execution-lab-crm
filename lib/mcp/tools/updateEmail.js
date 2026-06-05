import { z } from 'zod'
import { updateEmail } from '@/lib/contacts/updateEmail'
import { toolResult } from '../toolResult'

// MCP tool: change an existing contact email by its id.
export function registerUpdateEmail(server) {
  server.tool(
    'update_email',
    'Change an email by its record id (the email row, not the contact).',
    {
      id: z.string().describe('The email record UUID (not the contact id).'),
      email: z.string().describe('New email address.')
    },
    async ({ id, email }) => toolResult(await updateEmail(id, email))
  )
}
