'use server'

import { removeEmail } from '@/lib/contact/controllers/removeEmail'
import { withOrg } from '@/lib/auth/withOrg'

export const removeEmailAction = withOrg(
  (organizationId, formData) =>
    removeEmail(organizationId, formData.get('id'))
)
