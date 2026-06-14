'use server'

import { createContact } from '@/lib/contact/controllers/create'
import { withOrg } from '@/lib/auth/withOrg'

const fullName = (first, last) =>
  [first, last].filter(Boolean).join(' ')

export const quickCreateContactAction = withOrg(
  async (organizationId, { first, last, email }) => {
    const res = await createContact(organizationId, first, last, [email])

    if (res.error) return { error: res.error }

    return { ok: true, id: res.id, name: fullName(first, last), email }
  }
)
