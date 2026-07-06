'use server'

import { revalidatePath } from 'next/cache'
import { withAdmin } from '@/lib/auth/withAdmin'
import { revokePortalMember } from '@/lib/portalMember/controllers'

export const revokePortalMemberAction = withAdmin(async (_org, id) => {
  const result = await revokePortalMember(id)
  revalidatePath('/portal-members')

  return result
})
