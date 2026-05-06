// Load contacts (capped at 500 for now) with their email addresses.
export async function useContacts(supabase) {
  const { data } = await supabase
    .from('contacts')
    .select('id, display_name, google_account_id, contact_emails(email, is_primary)')
    .order('display_name', { ascending: true, nullsFirst: false })
    .limit(500)
  return data || []
}
