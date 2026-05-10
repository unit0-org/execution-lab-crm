'use server'

import { revalidatePath } from 'next/cache'
import { authedClient } from '@/lib/auth/authedClient'
import { saveUserNotes, snoozeDocumentation, dismissDocumentation } from '@/lib/interactions/mutations'

const guarded = (fn) => async (formData) => {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }
  await fn(supabase, formData)
  revalidatePath('/')

  return { ok: true }
}

export const submitMeetingNotes = guarded(async (s, fd) =>
  saveUserNotes(s, fd.get('meeting_id'), (fd.get('notes') || '').toString().trim()))

export const snoozeMeetingDocumentation = guarded(async (s, fd) =>
  snoozeDocumentation(s, fd.get('meeting_id'), fd.get('until')))

export const dismissMeetingDocumentation = guarded(async (s, fd) =>
  dismissDocumentation(s, fd.get('meeting_id')))
