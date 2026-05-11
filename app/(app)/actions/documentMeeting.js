'use server'

import { after } from 'next/server'
import { revalidatePath } from 'next/cache'
import { authedClient } from '@/lib/auth/authedClient'
import { saveUserNotes, snoozeDocumentation, dismissDocumentation } from '@/lib/interactions/mutations'
import { runExtraction } from '@/lib/extraction/runExtraction'

const guarded = (fn) => async (formData) => {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }
  try { await fn(supabase, formData) }
  catch (e) { return { ok: false, error: e.message } }
  revalidatePath('/')

  return { ok: true }
}

export const submitMeetingNotes = guarded(async (s, fd) => {
  const id = fd.get('meeting_id')
  await saveUserNotes(s, id, (fd.get('notes') || '').toString().trim())
  after(() => runExtraction(s, id))
})

export const snoozeMeetingDocumentation = guarded(async (s, fd) =>
  snoozeDocumentation(s, fd.get('meeting_id'), fd.get('until')))

export const dismissMeetingDocumentation = guarded(async (s, fd) =>
  dismissDocumentation(s, fd.get('meeting_id')))
