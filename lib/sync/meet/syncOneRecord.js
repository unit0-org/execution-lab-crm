import { fetchTranscripts } from '@/lib/google/meet/transcripts'
import { upsertMeeting } from './upsertMeeting'
import { syncParticipants } from './syncParticipants'
import { syncTranscript } from './syncTranscript'

// Full sync for one conferenceRecord: meeting + participants +
// every transcript and its entries.
export async function syncOneRecord(supabase, accessToken, record) {
  const meetingId = await upsertMeeting(supabase, record)
  const participantsByName = await syncParticipants(supabase, accessToken, meetingId, record.name)

  for await (const transcript of fetchTranscripts(accessToken, record.name)) {
    await syncTranscript(supabase, accessToken, meetingId, transcript, participantsByName)
  }

  return meetingId
}
