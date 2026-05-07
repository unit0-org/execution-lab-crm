// Last 8 events across every contact, with the contact's name joined.
export async function getRecentActivity(supabase) {
  const { data } = await supabase
    .from('timeline_entries')
    .select('id, entry_type, occurred_at, title, source_type, contact_id, contacts(display_name)')
    .order('occurred_at', { ascending: false })
    .limit(8)

  return data || []
}
