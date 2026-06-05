import { z } from 'zod'
import { removeParticipant } from '@/lib/meeting/controllers/removeParticipant'
import { toolResult } from '../toolResult'

// MCP tool: remove an attendee from a meeting by participant id.
export function registerRemoveParticipant(server) {
  server.tool(
    'remove_participant',
    'Remove an attendee by participant id (the link id, not contact id).',
    { id: z.string().describe('Participant UUID (not the contact id).') },
    async ({ id }) => toolResult(await removeParticipant(id))
  )
}
