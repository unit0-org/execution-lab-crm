import { getRegistration } from './getRegistration'
import { getCohort } from '@/lib/cohort/controllers'
import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'
import { payUrl } from '@/lib/portal/payUrl'

// Email a still-pending registrant a link to finish paying. Returns
// { sent } or { skipped } so the caller can give honest feedback.
export async function sendPaymentReminder(organizationId, registrationId) {
  const reg = await getRegistration(registrationId)

  if (!reg || reg.organization_id !== organizationId) return { skipped: true }

  if (reg.status === 'paid') return { skipped: true }

  const cohort = await getCohort(organizationId, reg.cohort_id)

  await sendTemplatedEmail(organizationId, 'payment_reminder', reg.email, {
    first_name: reg.first_name,
    cohort_name: cohort ? cohort.label : '',
    pay_url: payUrl(reg.id)
  })

  return { sent: true }
}
