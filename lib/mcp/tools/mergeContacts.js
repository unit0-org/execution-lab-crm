import { z } from 'zod'
import { mergeContacts } from '@/lib/contacts/merge'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: fold loser contacts into a winner, preserving activity.
export function registerMergeContacts(server) {
  server.tool(
    'merge_contacts',
    'Merge duplicate contacts into one, moving all activity to the winner.',
    {
      winnerId: z.string().describe('Contact UUID to keep.'),
      loserIds: z.array(z.string()).describe('Contact UUIDs to fold in.')
    },
    async ({ winnerId, loserIds }) => {
      await mergeContacts(await firstOrganizationId(), winnerId, loserIds)

      return toolResult({ ok: true })
    }
  )
}
