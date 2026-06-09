'use server'

import { addPhone } from '@/lib/contacts/addPhone'
import { withOrg } from '@/lib/auth/withOrg'

export const addPhoneAction = withOrg((organizationId, formData) => {
  const contactId = formData.get('contact_id')

  return addPhone(organizationId, contactId, formData.get('phone'))
})
