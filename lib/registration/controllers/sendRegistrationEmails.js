import { formatMoney } from '@/lib/purchase/controllers/formatMoney'
import { teamRecipients } from './teamRecipients'
import { trySendRegistrationEmail } from './trySendRegistrationEmail'

// Confirm to the registrant and alert the team. Failures are logged but
// swallowed so the payment webhook always completes.
export async function sendRegistrationEmails(organizationId, reg, cohort) {
  await trySendRegistrationEmail(
    organizationId, 'registration_confirmation', reg.email, {
      first_name: reg.first_name,
      cohort_name: cohort.label,
      start_date: cohort.start_date,
      price: formatMoney(reg.amount_total, 'cad')
    }
  )

  await trySendRegistrationEmail(
    organizationId, 'team_notification', teamRecipients(), {
      first_name: reg.first_name,
      last_name: reg.last_name,
      cohort_name: cohort.label,
      email: reg.email
    }
  )
}
