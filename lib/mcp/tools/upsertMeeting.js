import { z } from 'zod'
import { upsertMeetingOp } from '@/lib/enrichment/controllers'
import { enrichmentResult } from './enrichmentResult'

const schema = {
  sourceDriveId: z.string().describe('Drive file id — the dedup key.'),
  title: z.string().optional(),
  startsAt: z.string().optional().describe('ISO 8601 start.'),
  endsAt: z.string().optional().describe('ISO 8601 end.'),
  online: z.boolean().optional(),
  contactIds: z.array(z.string()).optional(),
  emails: z.array(z.string()).optional()
}

export function registerUpsertMeeting(server) {
  server.tool(
    'upsert_meeting',
    'Find-or-create a meeting by Drive file id; bridges calendar syncs.',
    schema,
    async (a) => enrichmentResult(await upsertMeetingOp(a))
  )
}
