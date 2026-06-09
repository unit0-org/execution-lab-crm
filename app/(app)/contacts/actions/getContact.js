'use server'

import { getContact } from '@/lib/contacts/get'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function getContactAction(id) {
  const m = await currentMembership()

  if (!m) return null

  return getContact(m.organizationId, id)
}
