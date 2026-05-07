import { revalidatePath } from 'next/cache'
import { loadAccount } from '@/lib/sync/account'
import { runSync } from '@/lib/sync/runSync'

export async function runSyncAccountAction(supabase, accountId) {
  const { account, error } = await loadAccount(supabase, accountId)
  if (error) return { ok: false, error }
  const total = await runSync(supabase, account)
  revalidatePath('/contacts')

  return { ok: true, total }
}
