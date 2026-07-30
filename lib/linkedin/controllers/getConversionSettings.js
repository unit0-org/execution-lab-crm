import { getEventConversion } from './getEventConversion'
import { readAttributionDays } from './readAttributionDays'

// Everything the settings page shows: our link to a rule, plus the
// attribution window LinkedIn holds for it. The window is never stored —
// LinkedIn owns it, and someone can change it in Campaign Manager.
export async function getConversionSettings(eventId) {
  const conversion = await getEventConversion(eventId)

  if (!conversion) return { conversion: null, attributionDays: null }

  const attributionDays = await readAttributionDays(conversion.conversion_urn)

  return { conversion, attributionDays }
}
