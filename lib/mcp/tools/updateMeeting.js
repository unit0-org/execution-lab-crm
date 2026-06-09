import { z } from 'zod'
import { updateMeeting } from '@/lib/meeting/controllers/updateMeeting'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

const run = async (id, fields) =>
  updateMeeting(await firstOrganizationId(), id, fields)

// MCP tool: update a meeting's editable fields.
export function registerUpdateMeeting(server) {
  server.tool(
    'update_meeting',
    'Update a meeting\'s title, start time and/or online flag.',
    {
      id: z.string().describe('The meeting UUID.'),
      title: z.string().optional().describe('New title.'),
      startsAt: z.string().optional().describe('ISO start time.'),
      online: z.boolean().optional().describe('Online vs in person.')
    },
    async ({ id, title, startsAt, online }) =>
      toolResult(await run(id, {
        title,
        starts_at: startsAt,
        online
      }))
  )
}
