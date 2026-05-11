'use server'

import { revalidatePath } from 'next/cache'
import { authedClient } from '@/lib/auth/authedClient'
import { dismissCard, snoozeCard, editCard } from '@/lib/cards/mutations'
import { confirmAndRoute } from '@/lib/cards/confirmAndRoute'

const guarded = (fn) => async (formData) => {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }
  try { await fn(supabase, formData) }
  catch (e) { return { ok: false, error: e.message } }
  revalidatePath('/')

  return { ok: true }
}

export const confirmCardAction  = guarded((s, fd) => confirmAndRoute(s, fd.get('card_id')))
export const dismissCardAction  = guarded((s, fd) => dismissCard(s, fd.get('card_id')))
export const snoozeCardAction   = guarded((s, fd) => snoozeCard(s, fd.get('card_id'), fd.get('until')))
export const editCardAction     = guarded((s, fd) => editCard(s, fd.get('card_id'), JSON.parse(fd.get('edited_payload'))))
