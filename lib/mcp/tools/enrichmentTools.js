import { registerApplyMeetingEnrichment } from './applyMeetingEnrichment'
import { registerUpsertContact } from './upsertContact'
import { registerUpsertMeeting } from './upsertMeeting'
import { registerAttachMeetingTranscript } from './attachMeetingTranscript'
import { registerGetMeetingBySource } from './getMeetingBySource'

// Register the transcript-enrichment ops (all additive + idempotent).
export function registerEnrichmentTools(server) {
  registerApplyMeetingEnrichment(server)
  registerUpsertContact(server)
  registerUpsertMeeting(server)
  registerAttachMeetingTranscript(server)
  registerGetMeetingBySource(server)
}
