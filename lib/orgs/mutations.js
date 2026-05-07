export const insertOrg = (supabase, { name, domain, sector }) =>
  supabase.from('orgs').insert({ name, domain: domain || null, sector: sector || null })
    .select('id').single()

export const updateOrg = (supabase, id, patch) =>
  supabase.from('orgs').update(patch).eq('id', id)

export const deleteOrg = (supabase, id) =>
  supabase.from('orgs').delete().eq('id', id)
