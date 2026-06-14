import { z } from 'zod'
import { removeRelationship }
  from '@/lib/contact/controllers/removeRelationship'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: remove a relationship by its record id.
export function registerRemoveRelationship(server) {
  server.tool(
    'remove_relationship',
    'Remove a relationship by its record id (the relationship row).',
    { id: z.string().describe('The relationship record UUID.') },
    async ({ id }) =>
      toolResult(await removeRelationship(await firstOrganizationId(), id))
  )
}
