'use server'

import { deleteEvent } from '@/lib/event/controllers/deleteEvent'

export async function deleteEventAction(id) {
  return await deleteEvent(id)
}
