import { MeetingMergeSuggestion } from '../models'

// Record a pending "these two might be the same meeting" suggestion,
// once per pair (idempotent across re-syncs).
export async function suggestMeetingMerge(manualMeetingId, googleMeetingId) {
  await MeetingMergeSuggestion.findOrCreate({
    where: {
      manual_meeting_id: manualMeetingId,
      google_meeting_id: googleMeetingId
    }
  })
}
