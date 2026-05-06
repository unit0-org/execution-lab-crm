import { fetchConnections } from '@/lib/google/people'
import { refreshAccessToken } from '@/lib/google/tokens'
import { readPerson } from './person'
import { savePerson } from './savePerson'
import { markAccountSynced } from './account'

// Sync all contacts for one google_accounts row. Returns the count saved.
export async function runSync(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)

  let total = 0
  for await (const batch of fetchConnections(access_token)) {
    for (const raw of batch) {
      if (await savePerson(supabase, account.id, readPerson(raw))) total += 1
    }
  }

  await markAccountSynced(supabase, account.id, access_token)
  return total
}
