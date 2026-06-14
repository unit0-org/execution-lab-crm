'use server'

import { removeFact } from '@/lib/contact/controllers/removeFact'
import { withMember } from '@/lib/auth/withMember'

export const removeNuggetAction = withMember(
  (formData) =>
    removeFact(formData.get('id'))
)
