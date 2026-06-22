import { Meeting } from '../models'

// The row that already holds this Google event id, if one exists — so a
// re-sync refreshes it instead of stamping the id onto a look-alike row
// (which would collide on the unique google_event_id).
export function findSyncedMeeting(googleEventId) {
  if (!googleEventId) return null

  return Meeting.findOne({ where: { google_event_id: googleEventId } })
}
