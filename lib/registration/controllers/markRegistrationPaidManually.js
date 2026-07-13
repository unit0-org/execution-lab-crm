import { Registration } from '../models'
import { dispatchRegistrationPaid }
  from '@/lib/automation/controllers/triggers/dispatchRegistrationPaid'

// Manually mark a registration paid (no Stripe session) — an operator
// confirming an out-of-band payment. amount_total stays null (no charge).
export async function markRegistrationPaidManually(registrationId) {
  const registration = await Registration.findByPk(registrationId)

  if (!registration) return { error: 'Registration not found' }

  registration.status = 'paid'
  registration.paid_at = new Date()
  await registration.save()
  await dispatchRegistrationPaid(registration.email)

  return registration.toJSON()
}
