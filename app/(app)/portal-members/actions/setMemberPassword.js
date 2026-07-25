'use server'

import { revalidatePath } from 'next/cache'
import { withAdmin } from '@/lib/auth/withAdmin'
import { setMemberPassword } from '@/lib/portalMember/controllers'

// Admin-only. Setting a password can flip an invited member to active, so
// the list has to re-read. The password itself is never returned.
export const setMemberPasswordAction = withAdmin(
  async (_org, contactId, password) => {
    const result = await setMemberPassword(contactId, password)
    revalidatePath('/portal-members')

    return result
  }
)
