'use server'

import { contactNuggets } from '@/lib/contacts/contactNuggets'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function contactAnswersAction(contactId) {
  const m = await currentMembership()

  if (!m) return []

  return contactNuggets(m.organizationId, contactId)
}
