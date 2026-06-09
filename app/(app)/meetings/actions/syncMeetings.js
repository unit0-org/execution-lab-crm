'use server'

import { syncMeetings } from '@/lib/meeting/controllers/syncMeetings'
import { getCurrentUserAction } from '@/app/(app)/actions/getCurrentUser'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function syncMeetingsAction(force) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const { email } = await getCurrentUserAction()

  if (!email) return { error: 'not_authenticated' }

  return syncMeetings(m.organizationId, email, force)
}
