import { z } from 'zod'
import { addFact } from '@/lib/contacts/addFact'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: record a manual fact (nugget) about a contact.
export function registerAddFact(server) {
  server.tool(
    'add_fact',
    'Record a fact (nugget) on a contact: a label (question) + a value.',
    {
      contactId: z.string().describe('The contact UUID.'),
      value: z.string().describe('The fact value.'),
      label: z.string().optional().describe('Optional question/label.')
    },
    async ({ contactId, value, label }) =>
      toolResult(await addFact(
        await firstOrganizationId(), contactId, label, value
      ))
  )
}
