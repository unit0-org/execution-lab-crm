// Per-contact qualitative intelligence (the spec's "save to CRM" target).
const COLS = 'id, contact_id, body, kind, status, source_meeting_id, created_at, updated_at'

export async function fetchActiveMemories(supabase, contactId) {
  const { data } = await supabase
    .from('memories').select(COLS)
    .eq('contact_id', contactId)
    .eq('status', 'active')
    .order('created_at', { ascending: false })

  return data || []
}

export async function fetchMemory(supabase, id) {
  const { data } = await supabase.from('memories').select(COLS).eq('id', id).single()

  return data
}
