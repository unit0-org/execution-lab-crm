import { z } from 'zod'
import { addPhone } from '@/lib/contacts/addPhone'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: add a phone number to a contact.
export function registerAddPhone(server) {
  server.tool(
    'add_phone',
    'Add a phone number to a contact (a contact may have several).',
    {
      contactId: z.string().describe('The contact UUID.'),
      phone: z.string().describe('Phone number to add.')
    },
    async ({ contactId, phone }) =>
      toolResult(await addPhone(
        await firstOrganizationId(), contactId, phone
      ))
  )
}
