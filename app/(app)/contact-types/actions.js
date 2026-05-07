'use server'

import { revalidatePath } from 'next/cache'
import { authedClient } from '@/lib/auth/authedClient'
import { insertContactType, deleteContactType } from '@/lib/contact_types/mutations'

export async function createContactType(_prev, formData) {
  const supabase = await authedClient()
  if (!supabase) return { ok: false, error: 'not signed in' }

  const { error } = await insertContactType(supabase, {
    name: formData.get('name')?.trim(),
    color: formData.get('color'),
  })
  if (error) return { ok: false, error: error.message }

  revalidatePath('/contact-types')
  return { ok: true }
}

export async function removeContactType(formData) {
  const supabase = await authedClient()
  if (!supabase) return
  await deleteContactType(supabase, formData.get('type_id'))
  revalidatePath('/contact-types')
}
