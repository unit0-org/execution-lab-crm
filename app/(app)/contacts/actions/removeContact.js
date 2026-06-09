'use server'

import { deleteContact } from '@/lib/contacts/remove'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function removeContactAction(id) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  await deleteContact(m.organizationId, id)

  return { ok: true }
}
