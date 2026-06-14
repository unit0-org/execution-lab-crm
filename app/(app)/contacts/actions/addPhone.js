'use server'

import { addPhone } from '@/lib/contact/controllers/addPhone'
import { withMember } from '@/lib/auth/withMember'

export const addPhoneAction = withMember((formData) => {
  const contactId = formData.get('contact_id')

  return addPhone(contactId, formData.get('phone'))
})
