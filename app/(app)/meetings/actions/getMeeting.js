'use server'

import { getMeetingDetail } from '@/lib/meeting/controllers/getMeetingDetail'

export async function getMeetingAction(id) {
  return await getMeetingDetail(id)
}
