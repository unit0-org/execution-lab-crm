import { z } from 'zod'
import { deleteCompany } from '@/lib/company/controllers/deleteCompany'
import { toolResult } from '../toolResult'
import { guardDestructive } from '../guardDestructive'
import { confirmField } from '../confirmField'

// MCP tool: delete a company (its contact links go too).
export function registerDeleteCompany(server) {
  server.tool(
    'delete_company',
    'Delete a company; its contact links are removed too.',
    { id: z.string().describe('The company UUID.'), confirm: confirmField },
    async ({ id, confirm }) => {
      const blocked = guardDestructive('delete this company', confirm)

      if (blocked) return blocked

      await deleteCompany(id)

      return toolResult({ ok: true })
    }
  )
}
