'use server'

import { updateEmail } from '@/lib/contacts/updateEmail'
import { withOrg } from '@/lib/auth/withOrg'

export const updateEmailAction = withOrg(
  (organizationId, formData) =>
    updateEmail(organizationId, formData.get('id'),
      formData.get('value'))
)
