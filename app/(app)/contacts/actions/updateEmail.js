'use server'

import { updateEmail } from '@/lib/contact/controllers/updateEmail'
import { withMember } from '@/lib/auth/withMember'

export const updateEmailAction = withMember(
  (formData) =>
    updateEmail(formData.get('id'),
      formData.get('value'))
)
