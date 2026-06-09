'use server'

import { addEmail } from '@/lib/contacts/addEmail'
import { withOrg } from '@/lib/auth/withOrg'

export const addEmailAction = withOrg((organizationId, formData) => {
  const contactId = formData.get('contact_id')

  return addEmail(organizationId, contactId, formData.get('email'))
})
