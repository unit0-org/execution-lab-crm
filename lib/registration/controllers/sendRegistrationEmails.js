import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'
import { formatMoney } from '@/lib/purchase/controllers/formatMoney'
import { teamRecipients } from './teamRecipients'

const trySend = async (organizationId, key, to, vars) => {
  try {
    await sendTemplatedEmail(organizationId, key, to, vars)
  } catch {
    // Never let an email failure break payment processing.
  }
}

// Confirm to the founder and alert the team. Failures are swallowed so
// the payment webhook always completes.
export async function sendRegistrationEmails(organizationId, reg, cohort) {
  await trySend(organizationId, 'registration_confirmation', reg.email, {
    first_name: reg.first_name,
    cohort_name: cohort.label,
    start_date: cohort.start_date,
    price: formatMoney(reg.amount_total, 'cad')
  })

  await trySend(organizationId, 'team_notification', teamRecipients(), {
    first_name: reg.first_name,
    last_name: reg.last_name,
    cohort_name: cohort.label,
    email: reg.email
  })
}
