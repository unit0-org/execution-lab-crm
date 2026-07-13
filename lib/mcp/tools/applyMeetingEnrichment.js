import { applyMeetingEnrichment } from '@/lib/enrichment/controllers'
import { applyMeetingEnrichmentSchema } from './applyMeetingEnrichment.schema'
import { callerActor } from '../callerActor'
import { enrichmentResult } from './enrichmentResult'

const DESC = 'Apply a whole transcript enrichment (contacts, meeting, ' +
  'participants, notes, relationships, transcript) in ONE idempotent ' +
  'transaction. Pass dryRun:true to preview the writes without committing.'

export function registerApplyMeetingEnrichment(server) {
  server.tool(
    'apply_meeting_enrichment',
    DESC,
    applyMeetingEnrichmentSchema,
    async (a, extra) => enrichmentResult(
      await applyMeetingEnrichment(a, await callerActor(extra))
    )
  )
}
