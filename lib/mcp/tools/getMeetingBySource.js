import { z } from 'zod'
import { getMeetingBySource } from '@/lib/enrichment/controllers'
import { enrichmentResult } from './enrichmentResult'

export function registerGetMeetingBySource(server) {
  server.tool(
    'get_meeting_by_source',
    'Look up a meeting by the Drive file it was enriched from.',
    { driveFileId: z.string().describe('The Drive file id.') },
    async (a) => enrichmentResult(await getMeetingBySource(a.driveFileId))
  )
}
