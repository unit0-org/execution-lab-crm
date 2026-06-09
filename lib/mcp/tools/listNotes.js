import { z } from 'zod'
import { listNotes } from '@/lib/contacts/listNotes'
import { toolResult } from '../toolResult'

export function registerListNotes(server) {
  server.tool(
    'list_notes',
    'List a contact\'s manual free-text notes (not facts/nuggets).',
    { contactId: z.string().describe('The contact UUID.') },
    async ({ contactId }) => toolResult(await listNotes(contactId))
  )
}
