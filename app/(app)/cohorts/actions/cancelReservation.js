'use server'

import { withMember } from '@/lib/auth/withMember'
import { cancelReservation } from '@/lib/registration/controllers'

export const cancelReservationAction = withMember(
  (registrationId) => cancelReservation(registrationId),
  { skipped: true }
)
