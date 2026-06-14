import { z } from 'zod'
import { listRelationships } from '@/lib/contact/controllers/listRelationships'
import { toolResult } from '../toolResult'

// MCP tool: list a contact's relationships (either direction).
export function registerListRelationships(server) {
  server.tool(
    'list_relationships',
    "List a contact's relationships to other contacts, with labels.",
    { contactId: z.string().describe('The contact UUID.') },
    async ({ contactId }) => toolResult(await listRelationships(contactId))
  )
}
