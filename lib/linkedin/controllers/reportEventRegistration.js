import { EventLinkedinConversion } from '../models'
import { buildConversionEvent } from './buildConversionEvent'
import { postToLinkedin } from '../api/postToLinkedin'

// Report one registration to LinkedIn as an ad conversion. A no-op unless
// a token is configured and the event is linked to a conversion rule.
//
// A LinkedIn failure is logged and swallowed on purpose: the registration
// has already landed in the CRM, and Luma must still get its 2xx or it
// retries the whole import.
//
// Success is logged too. Every other outcome here is a silent no-op, so
// without a positive line there is no way to tell "reported" from "never
// ran" after the fact — Campaign Manager only shows the transition to
// Active once, and never again.
export async function reportEventRegistration(eventId, registrant) {
  if (!process.env.LINKEDIN_ACCESS_TOKEN) return null

  if (!registrant.email) return null

  const urn = await EventLinkedinConversion.findRuleForEvent(eventId)

  if (!urn) return null

  try {
    const sent = await postToLinkedin(
      '/conversionEvents',
      buildConversionEvent(urn, registrant)
    )

    console.log('LinkedIn conversion reported', eventId, urn)

    return sent
  } catch (e) {
    console.error('LinkedIn conversion report failed', e.message)

    return null
  }
}
