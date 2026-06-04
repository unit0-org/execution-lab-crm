import { z } from 'zod'
import { getContact } from '@/lib/contacts/get'
import { toolResult } from '../toolResult'

// MCP tool: fetch one contact (with emails) by id.
export function registerGetContact(server) {
  server.tool(
    'get_contact',
    'Get a single contact by id, including emails.',
    { id: z.string().describe('The contact UUID.') },
    async ({ id }) => toolResult(await getContact(id))
  )
}
