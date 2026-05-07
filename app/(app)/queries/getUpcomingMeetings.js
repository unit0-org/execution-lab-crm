// Meetings starting within the next 7 days. Limited to 20 rows.
export async function getUpcomingMeetings(supabase) {
  const now = new Date()
  const horizon = new Date(now.getTime() + 7 * 86400_000)
  const { data } = await supabase
    .from('meetings')
    .select('id, title, started_at, meet_link, meeting_participants(contact_id, email)')
    .gte('started_at', now.toISOString())
    .lte('started_at', horizon.toISOString())
    .order('started_at', { ascending: true })
    .limit(20)

  return data || []
}
