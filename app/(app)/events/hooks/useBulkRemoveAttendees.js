'use client'

import { bulkRemoveAttendeesAction } from '../actions/bulkRemoveAttendees'

export function useBulkRemoveAttendees(onDone) {
  return (ids) => bulkRemoveAttendeesAction(ids).then(onDone)
}
