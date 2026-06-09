'use server'

import { createContact } from '@/lib/contacts/create'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

const fullName = (first, last) =>
  [first, last].filter(Boolean).join(' ')

export async function quickCreateContactAction({ first, last, email }) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const res = await createContact(m.organizationId, first, last, [email])

  if (res.error) return { error: res.error }

  return { ok: true, id: res.id, name: fullName(first, last), email }
}
