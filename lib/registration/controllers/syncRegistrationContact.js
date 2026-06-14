import { Registration } from '@/lib/registration/models'
import { linkRegistrationContact } from './linkRegistrationContact'
import { mapRegistrationToContact } from './mapRegistrationToContact'
import { recordRegistrationFacts } from './recordRegistrationFacts'
import { tagCohortContact } from './tagCohortContact'

// On registration (and again on payment), find-or-create the contact,
// copy the registrant's details onto it, record their facts and tag the
// cohort. Idempotent, so it's safe to run more than once. New Registration
// fields must be wired here — see ARCHITECTURE.md ("registration fields
// must flow to the CRM contact" invariant).
export async function syncRegistrationContact(registrationId, cohort) {
  const registration = await Registration.findByPk(registrationId)
  const contactId = await linkRegistrationContact(registration)

  await mapRegistrationToContact(contactId, registration)
  await recordRegistrationFacts(contactId, registration, cohort)
  await tagCohortContact(contactId, cohort)

  return contactId
}
