// Upsert one transcript header. Returns the row id.
export async function upsertTranscript(supabase, meetingId, transcript) {
  const { data, error } = await supabase
    .from('meeting_transcripts')
    .upsert({
      meeting_id: meetingId,
      google_transcript_id: transcript.name,
      drive_doc_id: transcript.docsDestination?.document || null,
    }, { onConflict: 'google_transcript_id' })
    .select('id')
    .single()

  if (error) throw new Error(`upsertTranscript: ${error.message}`)

  return data.id
}
