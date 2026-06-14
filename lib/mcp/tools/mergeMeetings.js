import { z } from 'zod'
import { mergeMeetings } from '@/lib/meeting/controllers/mergeMeetings'
import { toolResult } from '../toolResult'

// MCP tool: fold one meeting into another, preserving its data.
export function registerMergeMeetings(server) {
  server.tool(
    'merge_meetings',
    'Merge a duplicate meeting into another; the loser is deleted.',
    {
      winnerId: z.string().describe('Meeting UUID to keep.'),
      loserId: z.string().describe('Meeting UUID to fold in.')
    },
    async ({ winnerId, loserId }) => {
      const result = await mergeMeetings(winnerId, loserId)

      return toolResult(result?.error ? result : { ok: true })
    }
  )
}
