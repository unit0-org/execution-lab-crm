'use server'

import { revalidatePath } from 'next/cache'
import { withAdmin } from '@/lib/auth/withAdmin'
import { revokePortalMember } from '@/lib/portalMember/controllers'

// Revoke a contact's portal access (keeps the row for audit).
export const revokePortalInviteAction = withAdmin(async (orgId, formData) => {
  const id = formData.get('id')
  const result = await revokePortalMember(id)
  revalidatePath(`/contacts/${id}`)

  return result
})
