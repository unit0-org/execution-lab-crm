// Default lookback for first-time sync — 60 days.
const DEFAULT_MS = 60 * 24 * 60 * 60 * 1000

export const calendarCursor = (account) =>
  account.calendar_synced_at || new Date(Date.now() - DEFAULT_MS).toISOString()

export async function bumpCalendarCursor(supabase, accountId) {
  await supabase
    .from('google_accounts')
    .update({ calendar_synced_at: new Date().toISOString() })
    .eq('id', accountId)
}
