import { z } from 'zod'
import { mergeContacts } from '@/lib/contacts/merge'
import { toolResult } from '../toolResult'

// MCP tool: fold loser contacts into a winner, preserving activity.
export function registerMergeContacts(server) {
  server.tool(
    'merge_contacts',
    'Merge duplicate contacts into one, keeping all their activity.',
    {
      winnerId: z.string().describe('Contact UUID to keep.'),
      loserIds: z.array(z.string()).describe('Contact UUIDs to fold in.')
    },
    async ({ winnerId, loserIds }) => {
      await mergeContacts(winnerId, loserIds)

      return toolResult({ ok: true })
    }
  )
}
