'use server'

import { removeEventConversion }
  from '@/lib/linkedin/controllers/removeEventConversion'
import { withMember } from '@/lib/auth/withMember'

export const removeEventConversionAction = withMember(async (eventId) => {
  await removeEventConversion(eventId)

  return { ok: true, message: 'This event no longer reports to LinkedIn.' }
})
