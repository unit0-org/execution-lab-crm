'use server'

import { updateEmail } from '@/lib/contacts/updateEmail'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function updateEmailAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return updateEmail(m.organizationId, formData.get('id'),
    formData.get('value'))
}
