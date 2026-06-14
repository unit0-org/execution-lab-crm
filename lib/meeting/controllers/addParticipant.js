import { upsertContact } from '@/lib/contact/controllers/upsertContact'
import { upsertMeetingParticipant } from './upsertMeetingParticipant'

// Add a contact (found or created by email) to a meeting.
export async function addParticipant(meetingId, email) {
  if (!email) return { error: 'An email is required' }

  const { id } = await upsertContact({ email })

  await upsertMeetingParticipant(meetingId, id, { email })

  return { ok: true }
}
