'use server'

import { updateEvent } from '@/lib/event/controllers/updateEvent'
import { withOrg } from '@/lib/auth/withOrg'

export const editEventAction = withOrg((organizationId, _prev, formData) => {
  const id = formData.get('id')

  return updateEvent(organizationId, id, {
    title: formData.get('title'),
    date: formData.get('date') || null,
    type: formData.get('type'),
    url: formData.get('url') || null
  })
})
