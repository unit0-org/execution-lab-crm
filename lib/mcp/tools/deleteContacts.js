import { z } from 'zod'
import { deleteContacts } from '@/lib/contacts/removeMany'
import { toolResult } from '../toolResult'

// MCP tool: permanently delete several contacts at once.
export function registerDeleteContacts(server) {
  server.tool(
    'delete_contacts',
    'Permanently delete several contacts by id.',
    { ids: z.array(z.string()).describe('Contact UUIDs to delete.') },
    async ({ ids }) => {
      await deleteContacts(ids)

      return toolResult({ ok: true })
    }
  )
}
