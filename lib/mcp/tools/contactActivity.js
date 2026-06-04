import { z } from 'zod'
import { contactActivity } from '@/lib/activity/controllers/contactActivity'
import { toolResult } from '../toolResult'

// MCP tool: a contact's merged event/meeting/purchase timeline.
export function registerContactActivity(server) {
  server.tool(
    'contact_activity',
    'Get a contact timeline of events, meetings and purchases.',
    { contactId: z.string().describe('The contact UUID.') },
    async ({ contactId }) => toolResult(await contactActivity(contactId))
  )
}
