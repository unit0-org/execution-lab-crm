import { z } from 'zod'
import { removeParticipant } from '@/lib/meeting/controllers/removeParticipant'
import { toolResult } from '../toolResult'

// MCP tool: remove an attendee from a meeting by participant id.
export function registerRemoveParticipant(server) {
  server.tool(
    'remove_participant',
    'Remove an attendee from a meeting by participant id.',
    { id: z.string().describe('The participant UUID.') },
    async ({ id }) => toolResult(await removeParticipant(id))
  )
}
