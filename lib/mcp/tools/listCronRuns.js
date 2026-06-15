import { listCronRuns } from '@/lib/cron/controllers/listCronRuns'
import { toolResult } from '../toolResult'

// MCP tool: list recent cron runs (timing, result, errors), newest first.
export function registerListCronRuns(server) {
  server.tool(
    'list_cron_runs',
    'List recent scheduled cron runs with timing, result, and errors.',
    {},
    async () => toolResult(await listCronRuns())
  )
}
