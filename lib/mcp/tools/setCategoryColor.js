import { z } from 'zod'
import { setCategoryColor } from '@/lib/contacts/setCategoryColor'
import { toolResult } from '../toolResult'

const COLORS = 'Palette key: blue, green, cyan, amber, pink, purple, '
  + 'red, gray.'

// MCP tool: set a category's (label's) color.
export function registerSetCategoryColor(server) {
  server.tool(
    'set_category_color',
    'Set a category (label) color, shown as its pill color.',
    {
      id: z.string().describe('The category UUID.'),
      color: z.string().describe(COLORS)
    },
    async ({ id, color }) => {
      await setCategoryColor(id, color)

      return toolResult({ ok: true })
    }
  )
}
