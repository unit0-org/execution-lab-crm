import { z } from 'zod'
import { deleteContact } from '@/lib/contacts/remove'
import { toolResult } from '../toolResult'

// MCP tool: permanently delete a contact and its child records.
export function registerDeleteContact(server) {
  server.tool(
    'delete_contact',
    'Permanently delete a contact (emails and phones cascade away).',
    { id: z.string().describe('The contact UUID.') },
    async ({ id }) => {
      await deleteContact(id)

      return toolResult({ ok: true })
    }
  )
}
