'use server'

import { authedClient } from '@/lib/auth/authedClient'
import { runParseDraft } from '@/lib/contacts/personActions/parseDraft'
import { runSaveDraft } from '@/lib/contacts/personActions/saveDraft'

const guarded = (fn) => async (formData) => {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }

  return fn(supabase, formData)
}

export const parseDraft = guarded(runParseDraft)
export const saveDraft = async (_prev, formData) => {
  const result = await guarded(runSaveDraft)(formData)
  if (result?.error) return { ok: false, error: result.error }

  return { ok: true }
}
