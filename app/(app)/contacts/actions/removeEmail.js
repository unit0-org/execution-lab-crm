'use server'

import { removeEmail } from '@/lib/contact/controllers/removeEmail'
import { withMember } from '@/lib/auth/withMember'

export const removeEmailAction = withMember(
  (formData) =>
    removeEmail(formData.get('id'))
)
