'use server'

import { deleteContact } from '@/lib/contact/controllers/remove'
import { withMember } from '@/lib/auth/withMember'

export const removeContactAction = withMember(
  async (id) => {
    await deleteContact(id)

    return { ok: true }
  }
)
