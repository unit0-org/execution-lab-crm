export async function fetchOrgs(supabase) {
  const { data } = await supabase
    .from('orgs')
    .select('id, name, domain, sector')
    .order('name')

  return data || []
}

export async function fetchOrgById(supabase, id) {
  if (!id) return null
  const { data } = await supabase
    .from('orgs')
    .select('id, name, domain, sector')
    .eq('id', id)
    .maybeSingle()

  return data
}
