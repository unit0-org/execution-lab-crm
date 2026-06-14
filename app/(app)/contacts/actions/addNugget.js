'use server'

import { addFact } from '@/lib/contact/controllers/addFact'
import { withMember } from '@/lib/auth/withMember'

export const addNuggetAction = withMember((formData) => {
  const contactId = formData.get('contact_id')
  const label = formData.get('label')

  return addFact(contactId, label, formData.get('value'))
})
