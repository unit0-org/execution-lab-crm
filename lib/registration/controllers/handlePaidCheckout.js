import { Registration } from '@/lib/registration/models'
import { Cohort } from '@/lib/cohort/models'
import { markRegistrationPaid } from './markRegistrationPaid'
import { syncRegistrationContact } from './syncRegistrationContact'
import { sendRegistrationEmails } from './sendRegistrationEmails'
import { convertWaitlistEntry } from './convertWaitlistEntry'

// Back-office for a paid registration: stamp payment, re-sync the contact
// (now picking up the paid-amount facts), email, and convert the waitlist.
export async function handlePaidCheckout(session, organizationId) {
  const registration = await Registration.findOne({
    where: { stripe_session_id: session.id, organization_id: organizationId }
  })

  if (!registration) return

  if (registration.status === 'paid') return

  const cohort = await Cohort.findByPk(registration.cohort_id)

  await markRegistrationPaid(registration, session)
  await syncRegistrationContact(organizationId, registration.id, cohort)
  await sendRegistrationEmails(organizationId, registration, cohort)
  await convertWaitlistEntry(organizationId, registration.email)
}
