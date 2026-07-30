import { EventLinkedinConversion } from '../models'
import { buildConversionEvent } from './buildConversionEvent'
import { postToLinkedin } from '../api/postToLinkedin'

// Report one registration to LinkedIn as an ad conversion. A no-op unless
// a token is configured and the event is linked to a conversion rule.
//
// A LinkedIn failure is logged and swallowed on purpose: the registration
// has already landed in the CRM, and Luma must still get its 2xx or it
// retries the whole import.
export async function reportEventRegistration(eventId, registrant) {
  if (!process.env.LINKEDIN_ACCESS_TOKEN) return null

  if (!registrant.email) return null

  const urn = await EventLinkedinConversion.findRuleForEvent(eventId)

  if (!urn) return null

  try {
    return await postToLinkedin(
      '/conversionEvents',
      buildConversionEvent(urn, registrant)
    )
  } catch (e) {
    console.error('LinkedIn conversion report failed', e.message)

    return null
  }
}
