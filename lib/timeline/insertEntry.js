// Insert one manual timeline entry into the manual_entries table.
// Auto-derived entries (meetings, purchases, luma) come from the
// timeline_entries view; nothing inserts directly into it.
export async function insertTimelineEntry(supabase, payload) {
  const { error } = await supabase.from('manual_entries').insert({
    contact_id: payload.contactId,
    entry_type: payload.entryType,
    occurred_at: payload.occurredAt,
    title: payload.title || null,
    body: payload.body || null,
  })

  return error
}
