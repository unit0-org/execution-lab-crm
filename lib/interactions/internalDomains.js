// All connected Google account email domains. Anyone outside this set
// counts as an external attendee for "qualifies" classification.
export async function loadInternalDomains(supabase) {
  const { data } = await supabase.from('google_accounts').select('email')

  return new Set((data || []).map((r) => r.email?.split('@')[1]).filter(Boolean))
}

export const domainOf = (email) => email?.split('@')[1] || null
