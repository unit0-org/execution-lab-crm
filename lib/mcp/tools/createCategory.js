import { z } from 'zod'
import { createCategory } from '@/lib/contacts/createCategory'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

const COLORS = 'Palette key: blue, green, cyan, amber, pink, purple, '
  + 'red, gray.'

// MCP tool: create a contact category (label), optionally colored.
export function registerCreateCategory(server) {
  server.tool(
    'create_category',
    'Create a category — a label for grouping contacts (e.g. "VIP").',
    {
      name: z.string().describe('Category name, e.g. "Newsletter".'),
      color: z.string().optional().describe(COLORS)
    },
    async ({ name, color }) =>
      toolResult(await createCategory(
        await firstOrganizationId(), name, color
      ))
  )
}
