import { setEventConversion } from './setEventConversion'
import { applyAttributionWindow } from './applyAttributionWindow'

// Save both halves: our link to the rule here, and the attribution window
// on LinkedIn's own rule. Reports whether that second, remote half landed
// — the caller has to surface it.
export async function saveConversionSettings(eventId, urn, days) {
  await setEventConversion(eventId, urn)

  return applyAttributionWindow(urn, days)
}
