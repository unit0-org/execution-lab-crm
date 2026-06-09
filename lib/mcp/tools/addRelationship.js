import { z } from 'zod'
import { addRelationship } from '@/lib/contacts/addRelationship'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

const schema = {
  fromContactId: z.string().describe('The contact the relationship is from.'),
  toContactId: z.string().describe('The related contact UUID.'),
  relationshipTypeId: z.string().optional()
    .describe('A predefined type id (see list_relationship_types).'),
  customLabel: z.string().optional()
    .describe('Free-text label when no type id is given (e.g. "boxes with").')
}

// MCP tool: link two contacts by a type id or a free-text label.
export function registerAddRelationship(server) {
  server.tool(
    'add_relationship',
    'Relate two contacts via a type id or a free-text custom label.',
    schema,
    async (a) => toolResult(await addRelationship(
      await firstOrganizationId(), a.fromContactId,
      a.toContactId, a.relationshipTypeId, a.customLabel
    ))
  )
}
