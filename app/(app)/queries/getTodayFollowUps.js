// Open follow-ups due today or earlier, with the contact attached.
export async function getTodayFollowUps(supabase) {
  const today = new Date().toISOString().slice(0, 10)
  const { data } = await supabase
    .from('follow_up_flags')
    .select('id, due_date, reason, created_at, contacts(id, display_name)')
    .is('resolved_at', null)
    .lte('due_date', today)
    .order('due_date', { ascending: true })
    .limit(50)

  return data || []
}
