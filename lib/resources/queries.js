export async function fetchResources(supabase, contactId) {
  const { data } = await supabase
    .from('contact_resources')
    .select('id, url, kind, label, note, added_at')
    .eq('contact_id', contactId)
    .order('added_at', { ascending: false })

  return data || []
}
