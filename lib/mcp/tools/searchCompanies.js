import { z } from 'zod'
import { searchCompanies } from '@/lib/company/controllers/searchCompanies'
import { toolResult } from '../toolResult'

// MCP tool: find companies by name substring (case-insensitive).
export function registerSearchCompanies(server) {
  server.tool(
    'search_companies',
    'Find companies by name (case-insensitive substring). Prefer this ' +
      'over list_companies to locate a specific company.',
    { query: z.string().describe('Company name text to match.') },
    async ({ query }) => toolResult(await searchCompanies(query))
  )
}
