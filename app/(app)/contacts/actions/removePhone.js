'use server'

import { removePhone } from '@/lib/contact/controllers/removePhone'
import { withMember } from '@/lib/auth/withMember'

export const removePhoneAction = withMember(
  (formData) =>
    removePhone(formData.get('id'))
)
