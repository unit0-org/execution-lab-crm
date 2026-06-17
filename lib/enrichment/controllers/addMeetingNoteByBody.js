import { MeetingNote } from '@/lib/meeting/models'

// Add an unkeyed meeting note unless an identical body already exists on the
// meeting. Returns 1 when added, else 0.
export async function addMeetingNoteByBody(meetingId, body, t) {
  const [, created] = await MeetingNote.findOrCreate({
    where: { meeting_id: meetingId, body }, transaction: t
  })

  return created ? 1 : 0
}
