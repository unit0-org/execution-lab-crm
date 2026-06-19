import { upsertMeetingParticipant } from './upsertMeetingParticipant'

// Link each resolved attendee/contact pair to the meeting as a
// participant.
export function linkMeetingParticipants(meetingId, contacts) {
  return Promise.all(
    contacts.map(({ attendee, contact }) =>
      upsertMeetingParticipant(meetingId, contact.id, attendee))
  )
}
