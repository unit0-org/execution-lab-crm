import { z } from 'zod'
import { addCategoryToContacts } from '@/lib/contacts/addCategoryToContacts'
import { toolResult } from '../toolResult'

// MCP tool: add one category (label) to many contacts at once.
export function registerAddCategoryToContacts(server) {
  server.tool(
    'add_category_to_contacts',
    'Add one category (label) to many contacts at once.',
    {
      contactIds: z.array(z.string()).describe('Contact UUIDs to label.'),
      categoryId: z.string().describe('The category UUID to add.')
    },
    async ({ contactIds, categoryId }) => {
      await addCategoryToContacts(contactIds, categoryId)

      return toolResult({ ok: true })
    }
  )
}
