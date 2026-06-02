import { MeetingParticipant } from '../models'

// Attach a contact to a meeting once, recording the attendee details.
export async function upsertMeetingParticipant(meetingId, contactId, a) {
  const [participant] = await MeetingParticipant.findOrCreate({
    where: { meeting_id: meetingId, contact_id: contactId },
    defaults: {
      meeting_id: meetingId,
      contact_id: contactId,
      email: a.email,
      organizer: a.organizer,
      response_status: a.response_status
    }
  })

  return participant.id
}
