'use server'

import { updateEvent } from '@/lib/event/controllers/updateEvent'
import { withMember } from '@/lib/auth/withMember'

export const editEventAction = withMember((_prev, formData) => {
  const id = formData.get('id')

  return updateEvent(id, {
    title: formData.get('title'),
    date: formData.get('date') || null,
    type: formData.get('type'),
    url: formData.get('url') || null
  })
})
