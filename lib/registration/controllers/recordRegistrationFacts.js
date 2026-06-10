import { addFact } from '@/lib/contacts/addFact'
import { registrationFacts } from './registrationFacts'

// Record each registration detail as a contact fact (skips empties).
export async function recordRegistrationFacts(orgId, contactId, reg, cohort) {
  const facts = registrationFacts(reg, cohort)

  for (const fact of facts)
    await addFact(orgId, contactId, fact.label, fact.value)
}
