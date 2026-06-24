'use server'

import { withMember } from '@/lib/auth/withMember'
import { markRegistrationPaidManually }
  from '@/lib/registration/controllers'

export const markRegistrationPaidAction = withMember(
  (registrationId) => markRegistrationPaidManually(registrationId)
)
