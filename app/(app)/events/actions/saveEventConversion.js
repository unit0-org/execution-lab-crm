'use server'

import { setEventConversion }
  from '@/lib/linkedin/controllers/setEventConversion'
import { parseOverrideCents }
  from '@/lib/linkedin/controllers/parseOverrideCents'
import { withMember } from '@/lib/auth/withMember'

const MISSING = 'Add the conversion rule URN before saving.'
const SAVED = 'Registrations for this event now report to LinkedIn.'

export const saveEventConversionAction = withMember(async (_prev, formData) => {
  const urn = String(formData.get('conversionUrn') || '').trim()

  if (!urn) return { ok: false, message: MISSING }

  await setEventConversion(
    formData.get('eventId'),
    urn,
    parseOverrideCents(formData.get('conversionValue'))
  )

  return { ok: true, message: SAVED }
})
