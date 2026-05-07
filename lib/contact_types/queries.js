export async function fetchContactTypes(supabase) {
  const { data } = await supabase
    .from('contact_types')
    .select('id, name, color')
    .order('name')

  return data || []
}

export async function fetchContactTypeMap(supabase) {
  const { data } = await supabase
    .from('contact_type_assignments')
    .select('contact_id, type_id')
  const map = {}
  for (const r of data || []) (map[r.contact_id] ||= []).push(r.type_id)

  return map
}
