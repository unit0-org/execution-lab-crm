import { z } from 'zod'
import { updateNote } from '@/lib/contacts/updateNote'
import { toolResult } from '../toolResult'

export function registerUpdateNote(server) {
  server.tool(
    'update_note',
    'Edit a note by its id (from list_notes): set its body text.',
    {
      id: z.string().describe('The note UUID from list_notes.'),
      body: z.string().describe('The new note text.')
    },
    async ({ id, body }) => toolResult(await updateNote(id, body))
  )
}
