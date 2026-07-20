import { z } from 'zod'
import { contactActivity } from '@/lib/activity/controllers/contactActivity'
import { toolResult } from '../toolResult'

// MCP tool: a contact's merged timeline of events, meetings, purchases,
// registrations, synced emails and follow-up tasks.
export function registerContactActivity(server) {
  server.tool(
    'contact_activity',
    'Get a contact\'s timeline of events, meetings, purchases, '
      + 'cohort registrations, synced emails and follow-up tasks.',
    { contactId: z.string().describe('The contact UUID.') },
    async ({ contactId }) => toolResult(await contactActivity(contactId))
  )
}
