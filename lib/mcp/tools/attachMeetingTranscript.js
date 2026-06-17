import { z } from 'zod'
import { attachMeetingTranscriptOp } from '@/lib/enrichment/controllers'
import { enrichmentResult } from './enrichmentResult'

const schema = {
  meetingId: z.string().describe('Meeting UUID.'),
  driveFileId: z.string().describe('Drive file id — idempotency key.'),
  sourceUrl: z.string().optional(),
  text: z.string().optional().describe('Transcript text.')
}

export function registerAttachMeetingTranscript(server) {
  server.tool(
    'attach_meeting_transcript',
    'Attach a transcript to a meeting by Drive file id (idempotent).',
    schema,
    async (a) => enrichmentResult(await attachMeetingTranscriptOp(a))
  )
}
