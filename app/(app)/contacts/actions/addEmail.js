'use server'

import { addEmail } from '@/lib/contact/controllers/addEmail'
import { withMember } from '@/lib/auth/withMember'

export const addEmailAction = withMember((formData) => {
  const contactId = formData.get('contact_id')

  return addEmail(contactId, formData.get('email'))
})
