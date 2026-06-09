import { listEvents } from '@/lib/event/controllers/listEvents'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: list events with registered and checked-in counts.
export function registerListEvents(server) {
  server.tool(
    'list_events',
    'List events (e.g. workshops) with registered and checked-in counts.',
    {},
    async () => toolResult(await listEvents(await firstOrganizationId()))
  )
}
