'use server'

import { authedClient } from '@/lib/auth/authedClient'
import { insertTimelineEntry } from '@/lib/timeline/insertEntry'

export async function logEntry(_prev, formData) {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }

  const error = await insertTimelineEntry(supabase, {
    contactId: formData.get('contact_id'),
    entryType: formData.get('entry_type'),
    occurredAt: formData.get('occurred_at'),
    title: formData.get('title'),
    body: formData.get('body'),
  })

  if (error) return { ok: false, error: error.message }

  return { ok: true }
}
