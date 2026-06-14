import { z } from 'zod'
import { removeCategoryFromContacts }
  from '@/lib/contact/controllers/removeCategoryFromContacts'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: remove one category (label) from many contacts at once.
export function registerRemoveCategoryFromContacts(server) {
  server.tool(
    'remove_category_from_contacts',
    'Remove one category (label) from many contacts at once.',
    {
      contactIds: z.array(z.string()).describe('Contact UUIDs to unlabel.'),
      categoryId: z.string().describe('The category UUID to remove.')
    },
    async ({ contactIds, categoryId }) => {
      const orgId = await firstOrganizationId()

      await removeCategoryFromContacts(orgId, contactIds, categoryId)

      return toolResult({ ok: true })
    }
  )
}
