import { fetchParticipants } from '@/lib/google/meet/participants'
import { upsertParticipant } from './upsertParticipant'

// Persist every participant for one conferenceRecord. Returns a
// { [participant.name]: meeting_participants.id } map so transcript
// entries can resolve their speaker → row id.
export async function syncParticipants(supabase, accessToken, meetingId, recordName) {
  const map = {}
  for await (const participant of fetchParticipants(accessToken, recordName)) {
    const { id } = await upsertParticipant(supabase, meetingId, participant)
    map[participant.name] = id
  }

  return map
}
