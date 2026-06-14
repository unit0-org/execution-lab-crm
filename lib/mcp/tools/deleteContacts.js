import { z } from 'zod'
import { deleteContacts } from '@/lib/contact/controllers/removeMany'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: permanently delete several contacts at once.
export function registerDeleteContacts(server) {
  server.tool(
    'delete_contacts',
    'Permanently delete several contacts by id (e.g. dedupe cleanup).',
    { ids: z.array(z.string()).describe('Contact UUIDs to delete.') },
    async ({ ids }) => {
      await deleteContacts(await firstOrganizationId(), ids)

      return toolResult({ ok: true })
    }
  )
}
