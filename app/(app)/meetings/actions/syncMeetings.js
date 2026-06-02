'use server'

import { syncMeetings } from '@/lib/meeting/controllers/syncMeetings'
import { getCurrentUserAction } from '@/app/(app)/actions/getCurrentUser'

export async function syncMeetingsAction() {
  const { email } = await getCurrentUserAction()

  if (!email) return { error: 'not_authenticated' }

  return syncMeetings(email)
}
