import { z } from 'zod'
import { removeFact } from '@/lib/contacts/removeFact'
import { toolResult } from '../toolResult'

// MCP tool: remove a manual fact (nugget) by its id.
export function registerRemoveFact(server) {
  server.tool(
    'remove_fact',
    'Remove a fact (nugget) by its id (from list_facts).',
    {
      id: z.string().describe('The fact UUID from list_facts.')
    },
    async ({ id }) => toolResult(await removeFact(id))
  )
}
