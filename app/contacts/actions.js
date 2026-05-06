'use server'

import { revalidatePath } from 'next/cache'
import { authedClient } from '@/lib/auth/authedClient'
import { loadAccount } from '@/lib/sync/account'
import { runSync } from '@/lib/sync/runSync'

export async function syncAccount(formData) {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }

  const { account, error } = await loadAccount(supabase, formData.get('account_id'))
  if (error) return { ok: false, error }

  const total = await runSync(supabase, account)
  revalidatePath('/contacts')
  return { ok: true, total }
}

export async function disconnectAccount(formData) {
  const supabase = await authedClient()
  if (!supabase) return
  await supabase.from('google_accounts').delete().eq('id', formData.get('account_id'))
  revalidatePath('/contacts')
}
