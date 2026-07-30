'use server'

import { getEventConversion }
  from '@/lib/linkedin/controllers/getEventConversion'
import { withMember } from '@/lib/auth/withMember'

export const getEventConversionAction = withMember(
  (eventId) => getEventConversion(eventId),
  null
)
