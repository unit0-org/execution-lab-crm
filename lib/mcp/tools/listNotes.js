import { z } from 'zod'
import { listNotes } from '@/lib/contacts/listNotes'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

export function registerListNotes(server) {
  server.tool(
    'list_notes',
    'List a contact\'s manual free-text notes (not facts/nuggets).',
    { contactId: z.string().describe('The contact UUID.') },
    async ({ contactId }) =>
      toolResult(await listNotes(await firstOrganizationId(), contactId))
  )
}
