// Aggregate fetch for the person detail page. Returns the contact +
// owned children + joined entities. Server-side, called from page.js.
const SELECT = `
  id, display_name, role, warmth, met, goals, i_owe, city, lifecycle,
  google_account_id, google_contact_id, org_id,
  contact_emails(email, is_primary),
  contact_phones(phone, label),
  contact_socials(handle, kind),
  google_accounts(email, label),
  orgs(id, name, domain, sector)
`

export async function getPerson(supabase, id) {
  const { data, error } = await supabase
    .from('contacts')
    .select(SELECT)
    .eq('id', id)
    .maybeSingle()

  if (error) throw new Error(error.message)
  return data
}
