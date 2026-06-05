import { z } from 'zod'
import { removeMeetingNote } from '@/lib/meeting/controllers/removeMeetingNote'
import { toolResult } from '../toolResult'

// MCP tool: remove a meeting note by its id.
export function registerRemoveMeetingNote(server) {
  server.tool(
    'remove_meeting_note',
    'Remove a meeting note by its id.',
    { id: z.string().describe('The note UUID.') },
    async ({ id }) => toolResult(await removeMeetingNote(id))
  )
}
