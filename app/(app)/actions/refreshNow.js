'use server'

import { revalidatePath } from 'next/cache'
import { authedClient } from '@/lib/auth/authedClient'
import { refreshAllAccounts } from '@/lib/sync/refreshAll'

export async function refreshNow() {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }
  const { started } = await refreshAllAccounts(supabase)
  revalidatePath('/')

  return { ok: true, started }
}
