import { z } from 'zod'
import { setContactCategories } from '@/lib/contacts/setContactCategories'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: replace a contact's categories with the given set of ids.
export function registerSetContactCategories(server) {
  server.tool(
    'set_contact_categories',
    'Replace a contact\'s categories with this set (empty clears all).',
    {
      contactId: z.string().describe('The contact UUID.'),
      categoryIds: z.array(z.string())
        .describe('Category UUIDs to assign (empty clears all).')
    },
    async ({ contactId, categoryIds }) => {
      const orgId = await firstOrganizationId()

      await setContactCategories(orgId, contactId, categoryIds)

      return toolResult({ ok: true })
    }
  )
}
