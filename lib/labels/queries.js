// Server-side label queries (used by Server Components for SSR data).
export async function fetchLabels(supabase) {
  const { data } = await supabase
    .from('tags')
    .select('id, name, color')
    .order('name')
  return data || []
}

export async function fetchContactTagMap(supabase) {
  const { data } = await supabase.from('contact_tags').select('contact_id, tag_id')
  const byContact = {}
  for (const row of data || []) {
    (byContact[row.contact_id] ||= []).push(row.tag_id)
  }
  return byContact
}
