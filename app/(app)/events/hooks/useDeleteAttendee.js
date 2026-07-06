'use client'

import { removeAttendeeAction } from '../actions/removeAttendee'

export function useDeleteAttendee(id, onDeleted) {
  return () => removeAttendeeAction(id).then(onDeleted)
}
