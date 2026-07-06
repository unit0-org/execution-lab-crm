'use server'

import { bulkRemoveAttendees }
  from '@/lib/event/controllers/bulkRemoveAttendees'
import { withMember } from '@/lib/auth/withMember'

export const bulkRemoveAttendeesAction = withMember((ids) =>
  bulkRemoveAttendees(ids))
