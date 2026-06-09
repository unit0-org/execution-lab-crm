'use server'

import { removeEmail } from '@/lib/contacts/removeEmail'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function removeEmailAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return removeEmail(m.organizationId, formData.get('id'))
}
