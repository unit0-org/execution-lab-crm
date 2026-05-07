// Upsert a connected Gmail account by email so reconnects refresh tokens.
export async function upsertGoogleAccount(supabase, { tokens, info }) {
  const { error } = await supabase.from('google_accounts').upsert(
    {
      email: info.email,
      label: info.name || null,
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token || null,
      last_synced_at: null,
    },
    { onConflict: 'email' },
  )

  return error
}
