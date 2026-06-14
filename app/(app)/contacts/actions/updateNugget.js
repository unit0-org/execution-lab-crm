'use server'

import { updateFact } from '@/lib/contact/controllers/updateFact'
import { withOrg } from '@/lib/auth/withOrg'

export const updateNuggetAction = withOrg((organizationId, formData) => {
  const id = formData.get('id')
  const label = formData.get('label')

  return updateFact(organizationId, id, label, formData.get('value'))
})
