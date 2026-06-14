'use server'

import { deleteEvent } from '@/lib/event/controllers/deleteEvent'
import { withMember } from '@/lib/auth/withMember'

export const deleteEventAction = withMember(
  (id) => deleteEvent(id)
)
