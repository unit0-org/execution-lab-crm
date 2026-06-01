'use server'

import { getEventDetail } from '@/lib/event/controllers/getEventDetail'

export async function getEventAction(id) {
  return getEventDetail(id)
}
