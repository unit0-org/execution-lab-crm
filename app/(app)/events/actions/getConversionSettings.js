'use server'

import { getConversionSettings }
  from '@/lib/linkedin/controllers/getConversionSettings'
import { withMember } from '@/lib/auth/withMember'

// The fallback keeps the shape stable, so the view never has to guard.
export const getConversionSettingsAction = withMember(
  (eventId) => getConversionSettings(eventId),
  { conversion: null, attributionDays: null }
)
