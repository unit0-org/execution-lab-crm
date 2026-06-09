import { listMeetings } from '@/lib/meeting/controllers/listMeetings'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

const run = async () => listMeetings(await firstOrganizationId())

// MCP tool: list meetings with their attendees, newest first.
export function registerListMeetings(server) {
  server.tool(
    'list_meetings',
    'List all meetings (calendar or manual) with attendees, newest first.',
    {},
    async () => toolResult(await run())
  )
}
