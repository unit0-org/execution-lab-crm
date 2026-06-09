import { z } from 'zod'
import { updateFact } from '@/lib/contacts/updateFact'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { toolResult } from '../toolResult'

// MCP tool: edit a manual fact (nugget) by its id.
export function registerUpdateFact(server) {
  server.tool(
    'update_fact',
    'Edit a fact (nugget) by its id (from list_facts): set label + value.',
    {
      id: z.string().describe('The fact UUID from list_facts.'),
      value: z.string().describe('The new fact value.'),
      label: z.string().optional().describe('Optional question/label.')
    },
    async ({ id, value, label }) =>
      toolResult(await updateFact(
        await firstOrganizationId(), id, label, value
      ))
  )
}
