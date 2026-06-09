import { z } from 'zod'
import { getMeetingDetail } from '@/lib/meeting/controllers/getMeetingDetail'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

const run = async (id) => getMeetingDetail(await firstOrganizationId(), id)

// MCP tool: fetch one meeting with participants, notes and attachments.
export function registerGetMeeting(server) {
  server.tool(
    'get_meeting',
    'Get a meeting by id with participants, notes and attachments.',
    { id: z.string().describe('The meeting UUID.') },
    async ({ id }) => toolResult(await run(id))
  )
}
