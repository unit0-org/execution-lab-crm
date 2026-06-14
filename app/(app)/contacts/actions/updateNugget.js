'use server'

import { updateFact } from '@/lib/contact/controllers/updateFact'
import { withMember } from '@/lib/auth/withMember'

export const updateNuggetAction = withMember((formData) => {
  const id = formData.get('id')
  const label = formData.get('label')

  return updateFact(id, label, formData.get('value'))
})
