import { z } from 'zod'
import { deleteContact } from '@/lib/contact/controllers/remove'
import { toolResult } from '../toolResult'

// MCP tool: permanently delete a contact and its child records.
export function registerDeleteContact(server) {
  server.tool(
    'delete_contact',
    'Permanently delete a contact; its emails, phones and facts go too.',
    { id: z.string().describe('The contact UUID.') },
    async ({ id }) => {
      await deleteContact(id)

      return toolResult({ ok: true })
    }
  )
}
