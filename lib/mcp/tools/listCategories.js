import { listCategories } from '@/lib/contacts/listCategories'
import { toolResult } from '../toolResult'

// MCP tool: list all contact categories.
export function registerListCategories(server) {
  server.tool(
    'list_categories',
    'List all contact categories.',
    {},
    async () => toolResult(await listCategories())
  )
}
