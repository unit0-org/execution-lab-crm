import { fetchExternalParticipants } from '@/lib/interactions/participants'
import { loadInternalDomains } from '@/lib/interactions/internalDomains'

const transcriptText = async (supabase, meetingId) => {
  const { data: transcripts } = await supabase
    .from('meeting_transcripts').select('id').eq('meeting_id', meetingId)
  const ids = (transcripts || []).map((t) => t.id)
  if (ids.length === 0) return null
  const { data: entries } = await supabase
    .from('meeting_transcript_entries').select('speaker_email, text, started_at')
    .in('transcript_id', ids).order('started_at')

  return (entries || []).map((e) => `${e.speaker_email || '?'}: ${e.text}`).join('\n')
}

export async function buildExtractionInput(supabase, meeting) {
  const domains = await loadInternalDomains(supabase)
  const externals = await fetchExternalParticipants(supabase, meeting.id, domains)
  const text = meeting.user_notes || (await transcriptText(supabase, meeting.id))

  return text ? { meeting, externals, text, kind: meeting.user_notes ? 'notes' : 'transcript' } : null
}
