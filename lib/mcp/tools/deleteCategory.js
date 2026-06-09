import { z } from 'zod'
import { deleteCategory } from '@/lib/contacts/deleteCategory'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: delete a contact category by its id.
export function registerDeleteCategory(server) {
  server.tool(
    'delete_category',
    'Delete a category; contacts remain but lose this label.',
    { id: z.string().describe('The category UUID.') },
    async ({ id }) => {
      await deleteCategory(await firstOrganizationId(), id)

      return toolResult({ ok: true })
    }
  )
}
