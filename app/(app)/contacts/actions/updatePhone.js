'use server'

import { updatePhone } from '@/lib/contact/controllers/updatePhone'
import { withMember } from '@/lib/auth/withMember'

export const updatePhoneAction = withMember(
  (formData) =>
    updatePhone(formData.get('id'),
      formData.get('value'))
)
