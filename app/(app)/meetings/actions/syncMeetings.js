'use server'

import { syncMeetings } from '@/lib/meeting/controllers/syncMeetings'
import { getCurrentUserAction } from '@/app/(app)/actions/getCurrentUser'
import { withOrg } from '@/lib/auth/withOrg'

export const syncMeetingsAction = withOrg(
  async (organizationId, force) => {
    const { email } = await getCurrentUserAction()

    if (!email) return { error: 'not_authenticated' }

    return syncMeetings(organizationId, email, force)
  }
)
