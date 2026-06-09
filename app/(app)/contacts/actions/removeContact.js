'use server'

import { deleteContact } from '@/lib/contacts/remove'
import { withOrg } from '@/lib/auth/withOrg'

export const removeContactAction = withOrg(
  async (organizationId, id) => {
    await deleteContact(organizationId, id)

    return { ok: true }
  }
)
