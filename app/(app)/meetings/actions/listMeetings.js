'use server'

import { listMeetings } from '@/lib/meeting/controllers/listMeetings'

export async function listMeetingsAction() {
  return listMeetings()
}
