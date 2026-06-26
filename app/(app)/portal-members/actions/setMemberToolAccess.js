'use server'

import { revalidatePath } from 'next/cache'
import { withAdmin } from '@/lib/auth/withAdmin'
import { setToolAccess } from '@/lib/portalTool/controllers'

// Grant or revoke one portal tool for one member (the admin toggle).
export const setMemberToolAccessAction = withAdmin(
  async (orgId, contactId, toolKey, enabled) => {
    const result = await setToolAccess(contactId, toolKey, enabled)
    revalidatePath('/portal-members')

    return result
  }
)
