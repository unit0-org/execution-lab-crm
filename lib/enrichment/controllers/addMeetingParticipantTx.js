import { MeetingParticipant } from '@/lib/meeting/models'

// Attach a contact to a meeting once (dedup on meeting_id + contact_id).
export async function addMeetingParticipantTx(meetingId, contactId, email, t) {
  await MeetingParticipant.findOrCreate({
    where: { meeting_id: meetingId, contact_id: contactId },
    defaults: { meeting_id: meetingId, contact_id: contactId, email },
    transaction: t
  })
}
