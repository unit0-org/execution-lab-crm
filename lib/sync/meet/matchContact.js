// Resolve a Google Meet participant's email back to a contacts.id by
// looking up contact_emails. Case-insensitive — Google and our stored
// addresses often disagree on casing. Returns null if no contact matches.
export async function matchContactByEmail(supabase, email) {
  if (!email) return null
  const { data } = await supabase
    .from('contact_emails')
    .select('contact_id')
    .ilike('email', email)
    .limit(1)
    .maybeSingle()

  return data?.contact_id || null
}
