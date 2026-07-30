import { getConversionRule } from '../api/getConversionRule'

// The window LinkedIn currently holds for this rule. Null when we can't
// ask — no token, or LinkedIn refused — so the settings page falls back
// to the default instead of failing to load.
export async function readAttributionDays(urn) {
  if (!process.env.LINKEDIN_ACCESS_TOKEN) return null

  try {
    const rule = await getConversionRule(urn)

    return rule.postClickAttributionWindowSize || null
  } catch (e) {
    console.error('LinkedIn rule read failed', e.message)

    return null
  }
}
