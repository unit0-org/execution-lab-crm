'use server'

import { listEvents } from '@/lib/event/controllers/listEvents'

export async function listEventsAction() {
  return listEvents()
}
