'use server'

import { addAttendee } from '@/lib/event/controllers/addAttendee'
import { withMember } from '@/lib/auth/withMember'

export const addAttendeeAction = withMember((formData) => {
  const contactId = formData.get('contact_id')
  const status = formData.get('status')

  return addAttendee(formData.get('own_event_id'), contactId, status)
})
