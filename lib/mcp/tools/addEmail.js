import { z } from 'zod'
import { addEmail } from '@/lib/contacts/addEmail'
import { toolResult } from '../toolResult'

// MCP tool: add an email address to a contact.
export function registerAddEmail(server) {
  server.tool(
    'add_email',
    'Add an email address to a contact.',
    {
      contactId: z.string().describe('The contact UUID.'),
      email: z.string().describe('Email address to add.')
    },
    async ({ contactId, email }) =>
      toolResult(await addEmail(contactId, email))
  )
}
