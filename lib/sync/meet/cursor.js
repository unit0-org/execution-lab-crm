// Default lookback when an account has never been synced — 60 days.
const DEFAULT_LOOKBACK_MS = 60 * 24 * 60 * 60 * 1000

export const cursorISO = (account) =>
  account.meet_synced_at || new Date(Date.now() - DEFAULT_LOOKBACK_MS).toISOString()

export async function bumpCursor(supabase, accountId) {
  await supabase
    .from('google_accounts')
    .update({ meet_synced_at: new Date().toISOString() })
    .eq('id', accountId)
}
