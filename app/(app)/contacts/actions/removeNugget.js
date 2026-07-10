'use server'

import { removeFact } from '@/lib/contact/controllers/removeFact'
import { removeAnswer } from '@/lib/event/controllers/removeAnswer'
import { withMember } from '@/lib/auth/withMember'

export const removeNuggetAction = withMember((formData) => {
  const id = formData.get('id')

  if (formData.get('origin') === 'event') return removeAnswer(id)

  return removeFact(id)
})
