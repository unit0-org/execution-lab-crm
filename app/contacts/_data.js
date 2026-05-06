// Server-side data loaders for the /contacts page.
export async function loadAccounts(supabase) {
  const { data } = await supabase
    .from('google_accounts')
    .select('id, email, label, last_synced_at')
    .order('email')
  return data || []
}

export async function loadContacts(supabase) {
  const { data } = await supabase
    .from('contacts')
    .select('id, display_name, google_account_id, contact_emails(email, is_primary)')
    .order('display_name', { ascending: true, nullsFirst: false })
    .limit(500)
  return data || []
}

export const indexById = (rows) => Object.fromEntries(rows.map((r) => [r.id, r]))
