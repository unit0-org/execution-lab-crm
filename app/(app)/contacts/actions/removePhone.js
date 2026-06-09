'use server'

import { removePhone } from '@/lib/contacts/removePhone'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function removePhoneAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return removePhone(m.organizationId, formData.get('id'))
}
