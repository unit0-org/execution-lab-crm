// All open follow-up flags with the contact attached.
export async function fetchOpenFollowUps(supabase) {
  const { data } = await supabase
    .from('follow_up_flags')
    .select('id, due_date, reason, created_at, contact_id, contacts(id, display_name)')
    .is('resolved_at', null)
    .order('due_date', { ascending: true, nullsFirst: false })
    .limit(500)

  return data || []
}
