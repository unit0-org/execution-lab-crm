// Load all connected Google accounts.
export async function useAccounts(supabase) {
  const { data } = await supabase
    .from('google_accounts')
    .select('id, email, label, last_synced_at')
    .order('email')
  return data || []
}
