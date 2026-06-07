'use server'

import { createContact } from '@/lib/contacts/create'

const fullName = (first, last) =>
  [first, last].filter(Boolean).join(' ')

export async function quickCreateContactAction({ first, last, email }) {
  const res = await createContact(first, last, [email])

  if (res.error) return { error: res.error }

  return { ok: true, id: res.id, name: fullName(first, last), email }
}
