'use server'

import { updateEmail } from '@/lib/contact/controllers/updateEmail'
import { withOrg } from '@/lib/auth/withOrg'

export const updateEmailAction = withOrg(
  (organizationId, formData) =>
    updateEmail(organizationId, formData.get('id'),
      formData.get('value'))
)
