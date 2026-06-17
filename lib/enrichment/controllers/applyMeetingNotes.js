import { upsertMeetingNoteTx } from './upsertMeetingNoteTx'

// Apply every meetingNote; returns how many were created or replaced.
export async function applyMeetingNotes(meetingId, notes, t) {
  let count = 0

  for (const note of notes || []) {
    count += await upsertMeetingNoteTx(meetingId, note, t)
  }

  return count
}
