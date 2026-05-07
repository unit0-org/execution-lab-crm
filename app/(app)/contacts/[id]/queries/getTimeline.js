// Reverse-chrono timeline for a person, capped at 200 rows.
export async function getTimeline(supabase, contactId) {
  const { data } = await supabase
    .from('timeline_entries')
    .select('id, entry_type, occurred_at, title, body, source_id, source_type, created_at')
    .eq('contact_id', contactId)
    .order('occurred_at', { ascending: false })
    .limit(200)

  return data || []
}
