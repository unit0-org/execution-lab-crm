import { fillEmptyMeeting } from './fillEmptyMeeting'

// Reuse an existing meeting: backfill only its empty columns, then return
// the op result shape.
export async function reuseMeeting(meeting, payload, t, matchedBy) {
  await fillEmptyMeeting(meeting, payload, t)

  return { id: meeting.id, created: false, matchedBy }
}
