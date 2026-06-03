'use server'

import { getEventDetail } from '@/lib/event/controllers/getEventDetail'

export async function getEventAction(id) {
  return await getEventDetail(id)
}
