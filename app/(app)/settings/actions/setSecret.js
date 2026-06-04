'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { setOrgSecret } from '@/lib/org/controllers/setOrgSecret'

export async function setSecretAction(formData) {
  const member = await currentMembership()

  if (member?.role !== 'admin') return { error: 'Forbidden' }

  try {
    return await setOrgSecret(member.organizationId, formData.get('kind'),
      formData.get('value'))
  } catch (e) {
    return { error: e.message }
  }
}
