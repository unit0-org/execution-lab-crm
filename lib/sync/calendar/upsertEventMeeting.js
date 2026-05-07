// Upsert a meetings row from a Calendar event. Skips events without a
// start time (all-day events without dateTime).
export async function upsertEventMeeting(supabase, ev) {
  const start = ev.start?.dateTime
  const end   = ev.end?.dateTime
  if (!start) return null
  const { data, error } = await supabase
    .from('meetings')
    .upsert({
      google_event_id: ev.id,
      title: ev.summary || null,
      started_at: start,
      ended_at: end || null,
      meet_link: ev.hangoutLink || null,
    }, { onConflict: 'google_event_id' })
    .select('id').single()
  if (error) throw new Error(`upsertEventMeeting: ${error.message}`)

  return data.id
}
