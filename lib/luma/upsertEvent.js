// Upsert a luma_events row.
export async function upsertLumaEvent(supabase, ev) {
  const { data, error } = await supabase
    .from('luma_events')
    .upsert({
      luma_event_id: ev.id || ev.api_id,
      title: ev.name || null,
      description: ev.description || null,
      scheduled_at: ev.start_at || null,
      luma_url: ev.url || null,
    }, { onConflict: 'luma_event_id' })
    .select('id').single()
  if (error) throw new Error(`upsertLumaEvent: ${error.message}`)

  return data.id
}
