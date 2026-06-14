'use server'

import { createContact } from '@/lib/contact/controllers/create'
import { withMember } from '@/lib/auth/withMember'

const fullName = (first, last) =>
  [first, last].filter(Boolean).join(' ')

export const quickCreateContactAction = withMember(
  async ({ first, last, email }) => {
    const res = await createContact(first, last, [email])

    if (res.error) return { error: res.error }

    return { ok: true, id: res.id, name: fullName(first, last), email }
  }
)
