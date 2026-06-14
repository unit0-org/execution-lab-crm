'use server'

import { updatePhone } from '@/lib/contact/controllers/updatePhone'
import { withOrg } from '@/lib/auth/withOrg'

export const updatePhoneAction = withOrg(
  (organizationId, formData) =>
    updatePhone(organizationId, formData.get('id'),
      formData.get('value'))
)
