export async function fetchNotes(supabase, contactId) {
  const { data } = await supabase
    .from('notes')
    .select('id, body, pinned, created_at, updated_at')
    .eq('contact_id', contactId)
    .order('pinned', { ascending: false })
    .order('updated_at', { ascending: false })

  return data || []
}

export async function fetchPinnedNotes(supabase, contactId) {
  const { data } = await supabase
    .from('notes')
    .select('id, body, pinned, created_at')
    .eq('contact_id', contactId)
    .eq('pinned', true)
    .order('created_at', { ascending: false })

  return data || []
}
