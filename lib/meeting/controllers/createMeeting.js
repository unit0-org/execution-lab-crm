import { Meeting } from '../models'
import { addParticipant } from './addParticipant'

// Create a hand-entered meeting and link each attendee email to a
// contact (found or created on the fly).
export async function createMeeting(data) {
  const { title, starts_at, ends_at, online, emails } = data

  if (!title) return { error: 'A title is required' }

  const meeting = await Meeting.create({
    title,
    starts_at: starts_at || null,
    ends_at: ends_at || null,
    online: Boolean(online),
    source: 'manual'
  })

  for (const email of emails || []) await addParticipant(meeting.id, email)

  return { id: meeting.id }
}
