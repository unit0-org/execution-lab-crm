'use server'

import { updatePhone } from '@/lib/contacts/updatePhone'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function updatePhoneAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return updatePhone(m.organizationId, formData.get('id'),
    formData.get('value'))
}
