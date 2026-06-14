'use server'

import { addEmail } from '@/lib/contact/controllers/addEmail'
import { withOrg } from '@/lib/auth/withOrg'

export const addEmailAction = withOrg((organizationId, formData) => {
  const contactId = formData.get('contact_id')

  return addEmail(organizationId, contactId, formData.get('email'))
})
