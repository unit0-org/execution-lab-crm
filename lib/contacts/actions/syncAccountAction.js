import { revalidatePath } from 'next/cache'
import { loadAccount } from '@/lib/sync/account'
import { runSync } from '@/lib/sync/runSync'
import { syncCalendarAccount } from '@/lib/sync/calendar/syncAccount'
import { syncMeetAccount } from '@/lib/sync/meet/syncAccount'

export async function runSyncAccountAction(supabase, accountId) {
  const { account, error } = await loadAccount(supabase, accountId)
  if (error) return { ok: false, error }
  const total = await runSync(supabase, account)
  try { await syncCalendarAccount(supabase, account) } catch (e) { console.error('calendar sync', e.message) }
  try { await syncMeetAccount(supabase, account) }     catch (e) { console.error('meet sync', e.message) }
  revalidatePath('/contacts'); revalidatePath('/')
  return { ok: true, total }
}
