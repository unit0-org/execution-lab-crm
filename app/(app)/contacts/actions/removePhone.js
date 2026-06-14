'use server'

import { removePhone } from '@/lib/contact/controllers/removePhone'
import { withOrg } from '@/lib/auth/withOrg'

export const removePhoneAction = withOrg(
  (organizationId, formData) =>
    removePhone(organizationId, formData.get('id'))
)
