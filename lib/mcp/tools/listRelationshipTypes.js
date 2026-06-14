import { listRelationshipTypes }
  from '@/lib/contact/controllers/listRelationshipTypes'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: list the predefined relationship types.
export function registerListRelationshipTypes(server) {
  server.tool(
    'list_relationship_types',
    'List predefined relationship types (married to, works with, …).',
    {},
    async () =>
      toolResult(await listRelationshipTypes(await firstOrganizationId()))
  )
}
