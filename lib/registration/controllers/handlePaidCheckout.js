import { Registration } from '@/lib/registration/models'
import { Cohort } from '@/lib/cohort/models'
import { markRegistrationPaid } from './markRegistrationPaid'
import { linkRegistrationContact } from './linkRegistrationContact'
import { recordRegistrationFacts } from './recordRegistrationFacts'
import { tagCohortContact } from './tagCohortContact'
import { sendRegistrationEmails } from './sendRegistrationEmails'

// Back-office for a paid registration: stamp payment, link the contact,
// record its facts, and tag it with the cohort category.
export async function handlePaidCheckout(session, organizationId) {
  const registration = await Registration.findOne({
    where: { stripe_session_id: session.id, organization_id: organizationId }
  })

  if (!registration) return

  if (registration.status === 'paid') return

  const cohort = await Cohort.findByPk(registration.cohort_id)

  await markRegistrationPaid(registration, session)
  const contactId = await linkRegistrationContact(organizationId, registration)
  await recordRegistrationFacts(organizationId, contactId, registration, cohort)
  await tagCohortContact(organizationId, contactId, cohort)
  await sendRegistrationEmails(organizationId, registration, cohort)
}
