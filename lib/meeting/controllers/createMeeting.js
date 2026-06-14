import { Meeting } from '../models'
import { addParticipant } from './addParticipant'
import { addParticipantById } from './addParticipantById'

// Create a hand-entered meeting and link attendees by email (found or
// created on the fly) and/or by existing contact id.
export async function createMeeting(data) {
  const { title, starts_at, ends_at, online, emails, contactIds } = data

  if (!title) return { error: 'A title is required' }

  const meeting = await Meeting.create({
    title,
    starts_at: starts_at || null,
    ends_at: ends_at || null,
    online: Boolean(online),
    source: 'manual'
  })

  for (const email of emails || [])
    await addParticipant(meeting.id, email)

  for (const id of contactIds || []) await addParticipantById(meeting.id, id)

  return { id: meeting.id }
}
