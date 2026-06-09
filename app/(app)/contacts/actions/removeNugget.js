'use server'

import { removeFact } from '@/lib/contacts/removeFact'
import { withOrg } from '@/lib/auth/withOrg'

export const removeNuggetAction = withOrg(
  (organizationId, formData) =>
    removeFact(organizationId, formData.get('id'))
)
