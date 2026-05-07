'use server'

import { authedClient } from '@/lib/auth/authedClient'
import { runAddNote, runRemoveNote, runPinNote } from '@/lib/contacts/personActions/notes'
import { runAddResource, runRemoveResource } from '@/lib/contacts/personActions/resources'

const guarded = (fn) => async (formData) => {
  const supabase = await authedClient()
  if (!supabase) return

  return fn(supabase, formData)
}

export const addNote = guarded(runAddNote)
export const removeNote = guarded(runRemoveNote)
export const pinNote = guarded(runPinNote)
export const addResource = guarded(runAddResource)
export const removeResource = guarded(runRemoveResource)
