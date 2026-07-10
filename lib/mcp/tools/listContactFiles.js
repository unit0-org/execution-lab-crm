import { z } from 'zod'
import { listContactFiles }
  from '@/lib/contact/controllers/listContactFiles'
import { toolResult } from '../toolResult'

// MCP tool: a contact's file attachments — metadata plus short-lived
// signed download URLs, newest first.
export function registerListContactFiles(server) {
  server.tool(
    'list_contact_files',
    'List a contact\'s file attachments — name, type, size, upload date '
      + 'and a short-lived signed download URL, newest first.',
    { contactId: z.string().describe('The contact UUID.') },
    async ({ contactId }) => toolResult(await listContactFiles(contactId))
  )
}
