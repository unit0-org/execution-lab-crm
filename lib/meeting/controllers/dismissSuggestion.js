import { MeetingMergeSuggestion } from '../models'

// Dismiss a manual meeting's duplicate suggestions — every still-pending
// Google occurrence it matches, since the list shows them as one collapsed
// card. Rows are kept (dismissed) so a re-sync's findOrCreate won't
// resurrect them.
export async function dismissSuggestion(manualMeetingId) {
  await MeetingMergeSuggestion.update(
    { dismissed_at: new Date() },
    { where: { manual_meeting_id: manualMeetingId, dismissed_at: null } }
  )

  return { ok: true }
}
