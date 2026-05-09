import { syncConnections } from '@/lib/google/people'
import { refreshAccessToken } from '@/lib/google/tokens'
import { readPerson } from './person'
import { savePerson } from './savePerson'
import { deletePerson } from './deletePerson'
import { markAccountSynced } from './account'
import { mapWithLimit } from '@/lib/util/mapWithLimit'
import { bump } from './progress'

const CONCURRENCY = 6

const isDeleted = (raw) => raw?.metadata?.deleted

async function persistBatch(supabase, accountId, batch, totals) {
  const live = batch.filter((r) => !isDeleted(r))
  const dead = batch.filter(isDeleted)

  await mapWithLimit(dead, CONCURRENCY, (raw) => deletePerson(supabase, accountId, raw))
  const saved = await mapWithLimit(live, CONCURRENCY, (raw) =>
    savePerson(supabase, accountId, readPerson(raw)))

  totals.contacts += saved.filter(Boolean).length + dead.length
  await bump(supabase, accountId, { sync_contacts_done: totals.contacts })
}

async function persistToken(supabase, accountId, token) {
  if (!token) return
  await supabase.from('google_accounts').update({ contacts_sync_token: token }).eq('id', accountId)
}

export async function runSync(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)
  const totals = { contacts: 0 }
  const onBatch = (batch) => persistBatch(supabase, account.id, batch, totals)

  let result = await syncConnections(access_token, account.contacts_sync_token, onBatch)
  if (result.expired) {
    await persistToken(supabase, account.id, null)
    result = await syncConnections(access_token, null, onBatch)
  }
  await persistToken(supabase, account.id, result.nextSyncToken)
  await markAccountSynced(supabase, account.id, access_token)
  return totals.contacts
}
