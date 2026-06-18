'use server'

import { addNote } from '@/lib/contact/controllers/addNote'
import { withMember } from '@/lib/auth/withMember'
import { currentActor } from '@/lib/org/controllers/currentActor'
import { parseMentionIds } from './parseMentionIds'

export const addNoteAction = withMember(async (formData) => {
  const actor = await currentActor()
  const contactId = formData.get('contact_id')
  const notedAt = formData.get('noted_at') || null
  const mentions = { ...actor, userIds: parseMentionIds(formData) }

  return addNote(contactId, formData.get('body'), notedAt, mentions)
})
