import { listMeetings } from '@/lib/meeting/controllers/listMeetings'
import { toolResult } from '../toolResult'

// MCP tool: list meetings with their attendees, newest first.
export function registerListMeetings(server) {
  server.tool(
    'list_meetings',
    'List all meetings with their attendees, newest first.',
    {},
    async () => toolResult(await listMeetings())
  )
}
