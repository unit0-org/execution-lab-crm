import { z } from 'zod'
import { upsertContactOp } from '@/lib/enrichment/controllers'
import { enrichmentResult } from './enrichmentResult'

const schema = {
  email: z.string().optional().describe('Primary email (dedup key).'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  name: z.string().optional().describe('Full-name fallback for matching.'),
  emails: z.array(z.string()).optional().describe('Extra emails to add.'),
  phones: z.array(z.string()).optional().describe('Phones to add.'),
  linkedinUrl: z.string().optional().describe('Set only if empty.')
}

export function registerUpsertContact(server) {
  server.tool(
    'upsert_contact',
    'Find-or-create a contact (email → full name → create); idempotent.',
    schema,
    async (a) => enrichmentResult(await upsertContactOp(a))
  )
}
