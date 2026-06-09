import { z } from 'zod'
import { removeNote } from '@/lib/contacts/removeNote'
import { toolResult } from '../toolResult'

export function registerRemoveNote(server) {
  server.tool(
    'remove_note',
    'Remove a note by its id (from list_notes).',
    {
      id: z.string().describe('The note UUID from list_notes.')
    },
    async ({ id }) => toolResult(await removeNote(id))
  )
}
