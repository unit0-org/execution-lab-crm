'use server'

import { updatePhone } from '@/lib/contacts/updatePhone'
import { withOrg } from '@/lib/auth/withOrg'

export const updatePhoneAction = withOrg(
  (organizationId, formData) =>
    updatePhone(organizationId, formData.get('id'),
      formData.get('value'))
)
