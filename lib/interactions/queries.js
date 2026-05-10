// Queries against the `interactions` view (classified meetings).
// classification: 'in_person' | 'online' | 'unknown'
const COLS = `
  id, google_event_id, title, summary, location, started_at, ended_at, meet_link,
  organizer_email, owner_account_id, qualifies, origin, classification, has_transcript,
  user_notes, user_notes_at, documentation_status, documentation_snoozed_until,
  extracted_at, duration_minutes
`.trim()

export async function fetchInteraction(supabase, id) {
  const { data } = await supabase.from('interactions').select(COLS).eq('id', id).single()

  return data
}

export async function fetchRecentQualifying(supabase, daysBack = 7) {
  const since = new Date(Date.now() - daysBack * 86400000).toISOString()
  const { data } = await supabase
    .from('interactions').select(COLS)
    .eq('qualifies', true)
    .gte('started_at', since)
    .order('started_at', { ascending: false })

  return data || []
}
