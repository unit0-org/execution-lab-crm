// Load and validate a connected Google account for syncing.
export async function loadAccount(supabase, accountId) {
  const { data, error } = await supabase
    .from('google_accounts')
    .select('id, email, refresh_token, access_token')
    .eq('id', accountId)
    .single()

  if (error || !data) return { error: error?.message || 'account not found' }
  if (!data.refresh_token) {
    return { error: 'no refresh token; reconnect this account' }
  }

  return { account: data }
}

export async function markAccountSynced(supabase, accountId, accessToken) {
  await supabase
    .from('google_accounts')
    .update({ access_token: accessToken, last_synced_at: new Date().toISOString() })
    .eq('id', accountId)
}
