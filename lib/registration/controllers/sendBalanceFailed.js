import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'
import { balanceUrl } from '@/lib/portal/balanceUrl'
import { formatDollars } from '@/lib/portal/formatDollars'
import { outstandingPlanCents } from './outstandingPlanCents'

// Tell the registrant their balance was refused and hand them a link to
// pay it themselves — the amount is re-derived, so the email never quotes
// a figure that has since changed.
export async function sendBalanceFailed(installment, registration, cohort) {
  const owed = await outstandingPlanCents(registration, cohort)

  await sendTemplatedEmail('payment_balance_failed', registration.email, {
    first_name: registration.first_name,
    cohort_name: cohort.label,
    amount: formatDollars(owed.amountCents),
    balance_url: balanceUrl(installment.id)
  })
}
