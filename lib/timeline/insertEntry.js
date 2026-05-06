// Insert one row into timeline_entries. Manual source by default.
export async function insertTimelineEntry(supabase, payload) {
  const { error } = await supabase.from('timeline_entries').insert({
    contact_id:  payload.contactId,
    entry_type:  payload.entryType,
    occurred_at: payload.occurredAt,
    title:       payload.title || null,
    body:        payload.body || null,
    source_type: 'manual',
  })
  return error
}
