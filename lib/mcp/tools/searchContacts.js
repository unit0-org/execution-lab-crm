import { z } from 'zod'
import { searchContacts } from '@/lib/contact/controllers/searchContacts'
import { toolResult } from '../toolResult'

// MCP tool: find contacts by name or email substring (case-insensitive).
export function registerSearchContacts(server) {
  server.tool(
    'search_contacts',
    'Find contacts by name or email (case-insensitive substring). ' +
      'Prefer this over list_contacts to locate a specific person.',
    { query: z.string().describe('Name or email text to match.') },
    async ({ query }) => toolResult(await searchContacts(query))
  )
}
