import { z } from 'zod'
import { listPurchases } from '@/lib/purchase/controllers/listPurchases'
import { toolResult } from '../toolResult'

// MCP tool: list purchases, optionally within a time window.
export function registerListPurchases(server) {
  server.tool(
    'list_purchases',
    'List purchases (amounts in CAD), newest first. Optional time window.',
    { window: z.string().optional().describe('Window, e.g. "30d".') },
    async ({ window }) => toolResult(await listPurchases(window))
  )
}
