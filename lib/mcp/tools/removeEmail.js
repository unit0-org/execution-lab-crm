import { z } from 'zod'
import { removeEmail } from '@/lib/contacts/removeEmail'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: remove a contact email by its id.
export function registerRemoveEmail(server) {
  server.tool(
    'remove_email',
    'Remove an email by its record id (the email row, not the contact).',
    { id: z.string().describe('The email record UUID (not the contact id).') },
    async ({ id }) =>
      toolResult(await removeEmail(await firstOrganizationId(), id))
  )
}
