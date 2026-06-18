'use server'

import { updateNote } from '@/lib/contact/controllers/updateNote'
import { withMember } from '@/lib/auth/withMember'
import { currentActor } from '@/lib/org/controllers/currentActor'
import { parseMentionIds } from './parseMentionIds'

export const updateNoteAction = withMember(async (formData) => {
  const actor = await currentActor()
  const id = formData.get('id')
  const notedAt = formData.get('noted_at') || null
  const mentions = { ...actor, userIds: parseMentionIds(formData) }

  return updateNote(id, formData.get('body'), notedAt, mentions)
})
