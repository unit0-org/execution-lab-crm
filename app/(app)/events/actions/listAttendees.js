'use server'

import { listAttendees } from '@/lib/event/controllers/listAttendees'

export async function listAttendeesAction(id) {
  return listAttendees(id)
}
