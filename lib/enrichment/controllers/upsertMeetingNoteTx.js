import { upsertKeyedNote } from './upsertKeyedNote'
import { addMeetingNoteByBody } from './addMeetingNoteByBody'

// Op1 meetingNote: a keyed note replaces its prior version; an unkeyed note
// dedups by exact body. Returns 1 when it created or replaced, else 0.
export function upsertMeetingNoteTx(meetingId, note, t) {
  if (!note || !note.body) return 0

  if (note.key) return upsertKeyedNote(meetingId, note, t)

  return addMeetingNoteByBody(meetingId, note.body, t)
}
