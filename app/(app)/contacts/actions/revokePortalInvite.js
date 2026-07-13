'use server'

import { revalidatePath } from 'next/cache'
import { withAdmin } from '@/lib/auth/withAdmin'
import { revokePortalMember } from '@/lib/portalMember/controllers'

// Revoke a contact's portal access (keeps the row for audit).
export const revokePortalInviteAction = withAdmin(async (orgId, id) => {
  const result = await revokePortalMember(id)
  revalidatePath(`/contacts/${id}`)

  return result
})
