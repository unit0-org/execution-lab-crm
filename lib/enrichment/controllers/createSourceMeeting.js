import { Meeting } from '@/lib/meeting/models'
import { meetingFields } from './meetingFields'

// Create a new meeting from a Drive-transcript op payload.
export async function createSourceMeeting(meeting, t) {
  const created = await Meeting.create(
    { ...meetingFields(meeting), source: 'drive_transcript' },
    { transaction: t }
  )

  return { id: created.id, created: true, matchedBy: 'created' }
}
