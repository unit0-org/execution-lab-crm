import { z } from 'zod'
import { addNote } from '@/lib/contact/controllers/addNote'
import { callerActor } from '../callerActor'
import { toolResult } from '../toolResult'

export function registerAddNote(server) {
  server.tool(
    'add_note',
    'Add a manual free-text note to a contact (not a fact/nugget).',
    {
      contactId: z.string().describe('The contact UUID.'),
      body: z.string().describe('The note text.'),
      notedAt: z.string().optional()
        .describe('ISO date/time for the note. Defaults to now.')
    },
    async ({ contactId, body, notedAt }, extra) =>
      toolResult(
        await addNote(contactId, body, notedAt, await callerActor(extra))
      )
  )
}
