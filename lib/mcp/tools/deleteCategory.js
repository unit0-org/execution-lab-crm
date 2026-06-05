import { z } from 'zod'
import { deleteCategory } from '@/lib/contacts/deleteCategory'
import { toolResult } from '../toolResult'

// MCP tool: delete a contact category by its id.
export function registerDeleteCategory(server) {
  server.tool(
    'delete_category',
    'Delete a category; contacts remain but lose this label.',
    { id: z.string().describe('The category UUID.') },
    async ({ id }) => {
      await deleteCategory(id)

      return toolResult({ ok: true })
    }
  )
}
