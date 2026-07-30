import { setAttributionWindow } from '../api/setAttributionWindow'

// Push the chosen window to LinkedIn, which owns it. Unlike the webhook
// path, this is an interactive save — a failure has to be visible, so it
// reports back rather than swallowing.
export async function applyAttributionWindow(urn, days) {
  if (!process.env.LINKEDIN_ACCESS_TOKEN) return false

  try {
    await setAttributionWindow(urn, days)

    return true
  } catch (e) {
    console.error('LinkedIn attribution window update failed', e.message)

    return false
  }
}
