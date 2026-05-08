import { revalidatePath } from 'next/cache'
import { loadAccount } from '@/lib/sync/account'
import { runSync } from '@/lib/sync/runSync'
import { syncCalendarAccount } from '@/lib/sync/calendar/syncAccount'
import { syncMeetAccount } from '@/lib/sync/meet/syncAccount'

const guarded = (label, p) => p.catch((e) => { console.error(`${label} sync`, e.message); return null })

export async function runSyncAccountAction(supabase, accountId) {
  const { account, error } = await loadAccount(supabase, accountId)
  if (error) return { ok: false, error }

  const [total] = await Promise.all([
    guarded('contacts', runSync(supabase, account)),
    guarded('calendar', syncCalendarAccount(supabase, account)),
    guarded('meet',     syncMeetAccount(supabase, account)),
  ])

  revalidatePath('/contacts'); revalidatePath('/')
  return { ok: true, total: total || 0 }
}
