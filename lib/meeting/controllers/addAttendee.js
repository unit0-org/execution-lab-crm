import { addParticipant } from './addParticipant'
import { addParticipantById } from './addParticipantById'

// Add an attendee to a meeting by contact id when given, else by email.
export function addAttendee(organizationId, meetingId, { contactId, email }) {
  if (contactId) return addParticipantById(meetingId, contactId)

  return addParticipant(organizationId, meetingId, email)
}
