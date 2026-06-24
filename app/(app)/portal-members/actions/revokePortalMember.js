'use server'

import { revalidatePath } from 'next/cache'
import { withAdmin } from '@/lib/auth/withAdmin'
import { revokePortalMember } from '@/lib/portalMember/controllers'

export const revokePortalMemberAction = withAdmin(async (orgId, formData) => {
  const result = await revokePortalMember(formData.get('id'))
  revalidatePath('/portal-members')

  return result
})
