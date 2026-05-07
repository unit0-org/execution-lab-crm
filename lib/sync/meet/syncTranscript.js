import { fetchTranscriptEntries } from '@/lib/google/meet/transcripts'
import { upsertTranscript } from './upsertTranscript'
import { upsertTranscriptEntry } from './upsertTranscriptEntry'

// Pull every transcript entry for one transcript and persist each turn.
export async function syncTranscript(supabase, accessToken, meetingId, transcript, participantsByName) {
  const transcriptId = await upsertTranscript(supabase, meetingId, transcript)
  let count = 0
  for await (const entry of fetchTranscriptEntries(accessToken, transcript.name)) {
    await upsertTranscriptEntry(supabase, transcriptId, participantsByName, entry)
    count += 1
  }

  return count
}
