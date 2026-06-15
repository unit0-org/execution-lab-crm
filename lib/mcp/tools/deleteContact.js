import { z } from 'zod'
import { deleteContact } from '@/lib/contact/controllers/remove'
import { toolResult } from '../toolResult'
import { guardDestructive } from '../guardDestructive'
import { confirmField } from '../confirmField'

// MCP tool: permanently delete a contact and its child records.
export function registerDeleteContact(server) {
  server.tool(
    'delete_contact',
    'Permanently delete a contact; its emails, phones and facts go too.',
    { id: z.string().describe('The contact UUID.'), confirm: confirmField },
    async ({ id, confirm }) => {
      const blocked = guardDestructive('delete this contact', confirm)

      if (blocked) return blocked

      await deleteContact(id)

      return toolResult({ ok: true })
    }
  )
}
