// Upsert a meetings row keyed on meet_conference_record_id.
// Returns the row's id.
export async function upsertMeeting(supabase, record) {
  const { data, error } = await supabase
    .from('meetings')
    .upsert({
      meet_conference_record_id: record.name,
      title: record.space?.meetingCode || null,
      started_at: record.startTime,
      ended_at: record.endTime || null,
      meet_link: record.space?.meetingUri || null,
    }, { onConflict: 'meet_conference_record_id' })
    .select('id')
    .single()

  if (error) throw new Error(`upsertMeeting: ${error.message}`)

  return data.id
}
