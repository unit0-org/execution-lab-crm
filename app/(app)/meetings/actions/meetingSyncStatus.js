'use server'

import { getAccount } from '@/lib/google/controllers/getAccount'
import { getCurrentUserAction } from '@/app/(app)/actions/getCurrentUser'
import { withMember } from '@/lib/auth/withMember'

// The member's calendar last-sync time for the meetings page. Sync runs in
// the background now, so the page reads this instead of syncing on load.
export const meetingSyncStatusAction = withMember(async () => {
  const { email } = await getCurrentUserAction()
  const account = email ? await getAccount(email) : null

  return { lastSyncedAt: account?.last_synced_at || null }
})
