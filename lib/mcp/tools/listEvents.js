import { listEvents } from '@/lib/event/controllers/listEvents'
import { toolResult } from '../toolResult'

// MCP tool: list events with registered and checked-in counts.
export function registerListEvents(server) {
  server.tool(
    'list_events',
    'List events with registered and checked-in counts.',
    {},
    async () => toolResult(await listEvents())
  )
}
