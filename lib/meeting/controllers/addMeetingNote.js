import { MeetingNote } from '../models'

export async function addMeetingNote(meetingId, body) {
  if (!body) return { error: 'A note is required' }

  await MeetingNote.create({ meeting_id: meetingId, body })

  return { ok: true }
}
