'use server'

import { saveConversionSettings }
  from '@/lib/linkedin/controllers/saveConversionSettings'
import { parseAttributionDays }
  from '@/lib/linkedin/controllers/attributionDays'
import { withMember } from '@/lib/auth/withMember'

const MISSING = 'Add the conversion rule URN before saving.'
const SAVED = 'Registrations for this event now report to LinkedIn.'
const NO_WINDOW = 'Saved, but LinkedIn refused the attribution window.'

export const saveEventConversionAction = withMember(async (_prev, formData) => {
  const urn = String(formData.get('conversionUrn') || '').trim()

  if (!urn) return { ok: false, message: MISSING }

  const days = parseAttributionDays(formData.get('attributionDays'))
  const applied = await saveConversionSettings(
    formData.get('eventId'),
    urn,
    days
  )

  if (!applied) return { ok: true, message: NO_WINDOW }

  return { ok: true, message: SAVED }
})
