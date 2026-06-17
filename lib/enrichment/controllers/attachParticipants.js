import { addMeetingParticipantTx } from './addMeetingParticipantTx'

// Attach each resolved participant to the meeting (idempotent per contact).
export async function attachParticipants(meetingId, participants, refToId, t) {
  for (const { ref, identity } of participants || []) {
    await addMeetingParticipantTx(meetingId, refToId[ref], identity.email, t)
  }
}
