'use client'

import { deleteEventAction } from '../actions/deleteEvent'

export function useDeleteEvent(id, onDeleted) {
  return () => deleteEventAction(id).then(onDeleted)
}
