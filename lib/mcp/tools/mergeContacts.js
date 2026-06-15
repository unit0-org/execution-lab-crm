import { z } from 'zod'
import { mergeContacts } from '@/lib/contact/controllers/merge'
import { toolResult } from '../toolResult'
import { guardDestructive } from '../guardDestructive'
import { confirmField } from '../confirmField'

// MCP tool: fold loser contacts into a winner, preserving activity.
export function registerMergeContacts(server) {
  server.tool(
    'merge_contacts',
    'Merge duplicate contacts into one, moving all activity to the winner.',
    {
      winnerId: z.string().describe('Contact UUID to keep.'),
      loserIds: z.array(z.string()).describe('Contact UUIDs to fold in.'),
      confirm: confirmField
    },
    async ({ winnerId, loserIds, confirm }) => {
      const blocked = guardDestructive('merge these contacts', confirm)

      if (blocked) return blocked

      await mergeContacts(winnerId, loserIds)

      return toolResult({ ok: true })
    }
  )
}
