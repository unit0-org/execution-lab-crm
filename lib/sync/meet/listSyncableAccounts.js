// Load every connected Google account that has a refresh_token
// (without one we can't get a fresh access_token to call Meet).
export async function listSyncableAccounts(supabase) {
  const { data, error } = await supabase
    .from('google_accounts')
    .select('id, email, refresh_token, meet_synced_at, calendar_synced_at, contacts_sync_token, calendar_sync_token')
    .not('refresh_token', 'is', null)

  if (error) throw new Error(`listSyncableAccounts: ${error.message}`)

  return data || []
}
