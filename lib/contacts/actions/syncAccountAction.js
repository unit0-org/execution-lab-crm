import { after } from 'next/server'
import { revalidatePath } from 'next/cache'
import { loadAccount } from '@/lib/sync/account'
import { runSync } from '@/lib/sync/runSync'
import { syncCalendarAccount } from '@/lib/sync/calendar/syncAccount'
import { syncMeetAccount } from '@/lib/sync/meet/syncAccount'
import { beginSync, finishSync, setPhase } from '@/lib/sync/progress'
import { clearOrphanSyncs } from '@/lib/sync/clearOrphans'
import { runDetached } from './runDetached'

export async function runSyncAccountAction(supabase, accountId) {
  await clearOrphanSyncs(supabase)
  const { account, error } = await loadAccount(supabase, accountId)
  if (error) return { ok: false, error }
  if (account.sync_status === 'running') return { ok: true, alreadyRunning: true }

  await beginSync(supabase, accountId)
  after(() => runDetached({ supabase, account, runSync, syncCalendarAccount, syncMeetAccount, setPhase, finishSync, revalidatePath }))

  return { ok: true, started: true }
}
