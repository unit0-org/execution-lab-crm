'use server'

import { syncMeetings } from '@/lib/meeting/controllers/syncMeetings'
import { getCurrentUserAction } from '@/app/(app)/actions/getCurrentUser'
import { withMember } from '@/lib/auth/withMember'

export const syncMeetingsAction = withMember(
  async (force) => {
    const { email } = await getCurrentUserAction()

    if (!email) return { error: 'not_authenticated' }

    return syncMeetings(email, force)
  }
)
