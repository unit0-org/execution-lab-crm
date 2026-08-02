'use server'

import { bulkDeleteEvents } from '@/lib/event/controllers/bulkDeleteEvents'
import { withMember } from '@/lib/auth/withMember'

export const bulkDeleteEventsAction = withMember((ids) =>
  bulkDeleteEvents(ids))
