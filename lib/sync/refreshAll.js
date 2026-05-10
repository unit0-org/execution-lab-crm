import { after } from 'next/server'
import { listSyncableAccounts } from '@/lib/sync/meet/listSyncableAccounts'
import { runSyncAccountAction } from '@/lib/contacts/actions/syncAccountAction'

// Manual "refresh now" entry point: kick off a sync for every connected
// account in the background. Returns immediately so the page stays snappy.
export async function refreshAllAccounts(supabase) {
  const accounts = await listSyncableAccounts(supabase)
  after(async () => {
    for (const a of accounts) await runSyncAccountAction(supabase, a.id)
  })

  return { started: accounts.length }
}
