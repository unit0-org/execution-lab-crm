'use server'

import { withMember } from '@/lib/auth/withMember'
import { previewReservation } from '@/lib/registration/controllers'

export const previewReservationAction = withMember(
  (cohortId, person) => previewReservation(cohortId, person),
  null
)
