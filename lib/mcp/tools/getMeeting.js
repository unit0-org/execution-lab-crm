import { z } from 'zod'
import { getMeetingDetail } from '@/lib/meeting/controllers/getMeetingDetail'
import { toolResult } from '../toolResult'

// MCP tool: fetch one meeting with participants, notes and attachments.
export function registerGetMeeting(server) {
  server.tool(
    'get_meeting',
    'Get a meeting by id with participants, notes and attachments.',
    { id: z.string().describe('The meeting UUID.') },
    async ({ id }) => toolResult(await getMeetingDetail(id))
  )
}
