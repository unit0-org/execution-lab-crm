import { z } from 'zod'
import { createCategory } from '@/lib/contacts/createCategory'
import { toolResult } from '../toolResult'

// MCP tool: create a contact category.
export function registerCreateCategory(server) {
  server.tool(
    'create_category',
    'Create a category — a label for grouping contacts (e.g. "VIP").',
    { name: z.string().describe('Category name, e.g. "Newsletter".') },
    async ({ name }) => toolResult(await createCategory(name))
  )
}
