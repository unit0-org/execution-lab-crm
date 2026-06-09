'use server'

import { addFact } from '@/lib/contacts/addFact'
import { withOrg } from '@/lib/auth/withOrg'

export const addNuggetAction = withOrg((organizationId, formData) => {
  const contactId = formData.get('contact_id')
  const label = formData.get('label')

  return addFact(organizationId, contactId, label, formData.get('value'))
})
