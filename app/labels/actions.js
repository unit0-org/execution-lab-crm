'use server'

import { revalidatePath } from 'next/cache'
import { authedClient } from '@/lib/auth/authedClient'
import { insertLabel, deleteLabel } from '@/lib/labels/mutations'

export async function createLabel(_prev, formData) {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }

  const { error } = await insertLabel(supabase, {
    name: formData.get('name')?.trim(),
    color: formData.get('color'),
  })
  if (error) return { ok: false, error: error.message }

  revalidatePath('/labels')

  return { ok: true }
}

export async function removeLabel(formData) {
  const supabase = await authedClient()
  if (!supabase) return
  await deleteLabel(supabase, formData.get('label_id'))
  revalidatePath('/labels')
}
