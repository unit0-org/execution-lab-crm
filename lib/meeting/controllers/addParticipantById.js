import { upsertMeetingParticipant } from './upsertMeetingParticipant'

// Add an existing contact to a meeting by its id (no email lookup).
export async function addParticipantById(meetingId, contactId) {
  if (!contactId) return { error: 'A contact id is required' }

  await upsertMeetingParticipant(meetingId, contactId, {})

  return { ok: true }
}
