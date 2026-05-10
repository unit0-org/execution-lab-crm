import { fetchTranscriptEntries } from '@/lib/google/meet/transcripts'
import { upsertTranscript } from './upsertTranscript'
import { upsertTranscriptEntry } from './upsertTranscriptEntry'
import { runExtraction } from '@/lib/extraction/runExtraction'

// Pull every transcript entry for one transcript and persist each turn.
// Triggers follow-up extraction once the transcript is fully ingested.
export async function syncTranscript(supabase, accessToken, meetingId, transcript, participantsByName) {
  const transcriptId = await upsertTranscript(supabase, meetingId, transcript)
  let count = 0
  for await (const entry of fetchTranscriptEntries(accessToken, transcript.name)) {
    await upsertTranscriptEntry(supabase, transcriptId, participantsByName, entry)
    count += 1
  }
  await runExtraction(supabase, meetingId)

  return count
}
