'use server'

import { updateFact } from '@/lib/contact/controllers/updateFact'
import { updateAnswer } from '@/lib/event/controllers/updateAnswer'
import { withMember } from '@/lib/auth/withMember'

export const updateNuggetAction = withMember((formData) => {
  const id = formData.get('id')
  const value = formData.get('value')

  if (formData.get('origin') === 'event') return updateAnswer(id, value)

  return updateFact(id, formData.get('label'), value)
})
