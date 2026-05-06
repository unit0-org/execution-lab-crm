'use server'

import { authedClient } from '@/lib/auth/authedClient'
import { runSyncAccountAction } from '@/lib/contacts/actions/syncAccountAction'
import { runDisconnectAccountAction } from '@/lib/contacts/actions/disconnectAccountAction'
import { runApplyLabel, runRemoveLabel } from '@/lib/contacts/actions/labelActions'

const guarded = (fn) => async (formData) => {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }
  return fn(supabase, formData)
}

export const syncAccount = guarded((s, fd) => runSyncAccountAction(s, fd.get('account_id')))
export const disconnectAccount = guarded((s, fd) => runDisconnectAccountAction(s, fd.get('account_id')))
export const applyLabel = guarded((s, fd) => runApplyLabel(s, fd))
export const removeContactLabel = guarded((s, fd) => runRemoveLabel(s, fd))
