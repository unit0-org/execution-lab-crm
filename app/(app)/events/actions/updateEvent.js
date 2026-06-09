'use server'

import { updateEvent } from '@/lib/event/controllers/updateEvent'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function updateEventAction(_prev, formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const id = formData.get('id')

  return updateEvent(m.organizationId, id, {
    title: formData.get('title'),
    date: formData.get('date') || null,
    type: formData.get('type')
  })
}
