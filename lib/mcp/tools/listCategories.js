import { listCategories } from '@/lib/contact/controllers/listCategories'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: list all contact categories.
export function registerListCategories(server) {
  server.tool(
    'list_categories',
    'List all categories (labels used to group contacts).',
    {},
    async () =>
      toolResult(await listCategories(await firstOrganizationId()))
  )
}
