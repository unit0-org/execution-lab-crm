'use server'

import { authedClient } from '@/lib/auth/authedClient'
import { runSnoozeFlag, runResolveFlag } from '@/lib/contacts/personActions/followups'

const guarded = (fn) => async (formData) => {
  const supabase = await authedClient()
  if (!supabase) return

  return fn(supabase, formData)
}

export const snooze = guarded(runSnoozeFlag)
export const markDone = guarded(runResolveFlag)
