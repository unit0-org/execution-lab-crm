import { z } from 'zod'
import { getContact } from '@/lib/contacts/get'
import { toolResult } from '../toolResult'

// MCP tool: fetch one contact (with emails) by id.
export function registerGetContact(server) {
  server.tool(
    'get_contact',
    'Get one contact by id with its emails, phones, ' +
      'LinkedIn URL and categories.',
    { id: z.string().describe('The contact UUID.') },
    async ({ id }) => toolResult(await getContact(id))
  )
}
