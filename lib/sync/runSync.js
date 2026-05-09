import { fetchConnections } from '@/lib/google/people'
import { refreshAccessToken } from '@/lib/google/tokens'
import { readPerson } from './person'
import { savePerson } from './savePerson'
import { markAccountSynced } from './account'
import { mapWithLimit } from '@/lib/util/mapWithLimit'
import { bump } from './progress'

const CONCURRENCY = 6

export async function runSync(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)

  let total = 0
  for await (const batch of fetchConnections(access_token)) {
    const saved = await mapWithLimit(batch, CONCURRENCY, (raw) =>
      savePerson(supabase, account.id, readPerson(raw)))
    total += saved.filter(Boolean).length
    await bump(supabase, account.id, { sync_contacts_done: total })
  }

  await markAccountSynced(supabase, account.id, access_token)
  return total
}
