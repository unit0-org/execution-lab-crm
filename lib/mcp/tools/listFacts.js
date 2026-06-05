import { z } from 'zod'
import { listFacts } from '@/lib/contacts/listFacts'
import { toolResult } from '../toolResult'

// MCP tool: list a contact's manual facts (nuggets).
export function registerListFacts(server) {
  server.tool(
    'list_facts',
    'List a contact\'s manually recorded facts (nuggets).',
    { contactId: z.string().describe('The contact UUID.') },
    async ({ contactId }) => toolResult(await listFacts(contactId))
  )
}
