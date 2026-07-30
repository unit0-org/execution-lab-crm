import { hashEmail } from './hashEmail'
import { buildConversionValue } from './buildConversionValue'

function nameOf({ firstName, lastName }) {
  if (!firstName && !lastName) return {}

  return { userInfo: { firstName, lastName } }
}

// Names raise the match rate but can't identify anyone on their own, so
// they ride alongside the hashed email rather than replacing it.
function userOf(registrant) {
  const idValue = hashEmail(registrant.email)

  return {
    userIds: [{ idType: 'SHA256_EMAIL', idValue }],
    ...nameOf(registrant)
  }
}

// One conversion event: who converted, into which rule, when it happened,
// what it was worth, and a stable id so LinkedIn collapses retried
// deliveries into a single conversion.
export function buildConversionEvent(urn, registrant) {
  return {
    conversion: urn,
    conversionHappenedAt: registrant.registeredAt,
    conversionValue: buildConversionValue(registrant),
    user: userOf(registrant),
    eventId: registrant.dedupId
  }
}
