// Upsert one speaker turn (transcriptEntry from the Meet API).
// google_entry_id is the unique key — re-syncing the same transcript
// is a no-op for existing entries.
export async function upsertTranscriptEntry(supabase, transcriptId, participantsByName, entry) {
  const participantId = participantsByName[entry.participant] || null
  const { error } = await supabase
    .from('meeting_transcript_entries')
    .upsert({
      transcript_id: transcriptId,
      google_entry_id: entry.name,
      speaker_email: null,
      participant_id: participantId,
      text: entry.text || '',
      started_at: entry.startTime,
      ended_at: entry.endTime || null,
    }, { onConflict: 'google_entry_id' })

  if (error) throw new Error(`upsertTranscriptEntry: ${error.message}`)
}
