'use server'

import { removeEmail } from '@/lib/contacts/removeEmail'
import { withOrg } from '@/lib/auth/withOrg'

export const removeEmailAction = withOrg(
  (organizationId, formData) =>
    removeEmail(organizationId, formData.get('id'))
)
