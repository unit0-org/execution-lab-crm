import { z } from 'zod'
import { getCompany } from '@/lib/company/controllers/getCompany'
import { toolResult } from '../toolResult'

// MCP tool: fetch one company by id.
export function registerGetCompany(server) {
  server.tool(
    'get_company',
    'Get one company by id (name, legal name, address, invoice email…).',
    { id: z.string().describe('The company UUID.') },
    async ({ id }) => toolResult(await getCompany(id))
  )
}
