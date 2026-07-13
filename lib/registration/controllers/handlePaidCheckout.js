import { Registration } from '@/lib/registration/models'
import { Cohort } from '@/lib/cohort/models'
import { markRegistrationPaid } from './markRegistrationPaid'
import { syncRegistrationContact } from './syncRegistrationContact'
import { sendRegistrationEmails } from './sendRegistrationEmails'
import { convertWaitlistEntry } from './convertWaitlistEntry'
import { dispatchRegistrationPaid }
  from '@/lib/automation/controllers/triggers/dispatchRegistrationPaid'

// Back-office for a paid registration: stamp payment, re-sync the contact
// (now picking up the paid-amount facts), email, and convert the waitlist.
export async function handlePaidCheckout(session) {
  const registration = await Registration.findOne({
    where: { stripe_session_id: session.id }
  })

  if (!registration) return

  if (registration.status === 'paid') return

  const cohort = await Cohort.findByPk(registration.cohort_id)

  await markRegistrationPaid(registration, session)
  await syncRegistrationContact(registration.id, cohort)
  await sendRegistrationEmails(registration, cohort)
  await convertWaitlistEntry(registration.email)
  await dispatchRegistrationPaid(registration.email)
}
