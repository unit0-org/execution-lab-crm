// Remove a meeting row that Calendar reported as cancelled. Idempotent.
export async function deleteEvent(supabase, ev) {
  const id = ev?.id
  if (!id) return
  await supabase.from('meetings').delete().eq('google_event_id', id)
}
