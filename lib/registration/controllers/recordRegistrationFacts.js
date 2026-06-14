import { addFactIfMissing } from '@/lib/contact/controllers/addFactIfMissing'
import { registrationFacts } from './registrationFacts'

// Record each registration detail as a contact fact (skips empties and
// any label the contact already has, so re-syncing doesn't duplicate).
export async function recordRegistrationFacts(orgId, contactId, reg, cohort) {
  const facts = registrationFacts(reg, cohort)

  for (const fact of facts)
    await addFactIfMissing(orgId, contactId, fact.label, fact.value)
}
