import { z } from 'zod'
import { participant } from './participant.schema'
import { meeting, relationship, meetingNote, transcript }
  from './meetingParts.schema'

// Zod shape for apply_meeting_enrichment (op1) — the whole transcript
// enrichment in one payload.
export const applyMeetingEnrichmentSchema = {
  meeting,
  participants: z.array(participant).optional(),
  relationships: z.array(relationship).optional(),
  meetingNotes: z.array(meetingNote).optional(),
  transcript: transcript.optional(),
  dryRun: z.boolean().optional()
}
