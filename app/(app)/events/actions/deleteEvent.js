'use server'

import { deleteEvent } from '@/lib/event/controllers/deleteEvent'
import { withOrg } from '@/lib/auth/withOrg'

export const deleteEventAction = withOrg(
  (organizationId, id) => deleteEvent(organizationId, id)
)
