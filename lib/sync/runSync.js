import { fetchConnections } from '@/lib/google/people'
import { refreshAccessToken } from '@/lib/google/tokens'
import { readPerson } from './person'
import { savePerson } from './savePerson'
import { markAccountSynced } from './account'

// Sync all contacts for one google_accounts row. Returns the count saved.
// Persists each batch in parallel — bounded by Google's 500-per-page max.
export async function runSync(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)

  let total = 0
  for await (const batch of fetchConnections(access_token)) {
    const saved = await Promise.all(
      batch.map((raw) => savePerson(supabase, account.id, readPerson(raw))),
    )
    total += saved.filter(Boolean).length
  }

  await markAccountSynced(supabase, account.id, access_token)
  return total
}
