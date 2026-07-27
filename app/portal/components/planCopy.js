import { formatDollars } from '@/lib/portal/formatDollars'
import { longDateLabel } from '@/lib/portal/longDateLabel'
import { PAY_IN_FULL, PAY_ON_PLAN } from '../actions/wantsPaymentPlan'

// The two ways to pay, priced so the choice is concrete.
export const planOptions = (plan) => [
  {
    value: PAY_IN_FULL,
    label: `Pay in full · ${formatDollars(plan.totalCents)}`
  },
  {
    value: PAY_ON_PLAN,
    label: `50% now · ${formatDollars(plan.depositCents)}`
  }
]

// The plan's terms, said plainly before they pay — the amount, the card and
// the date. This is the consent that lets us charge the second half later.
export const planHint = (plan) =>
  `On the 50/50 plan we charge the remaining ` +
  `${formatDollars(plan.balanceCents)} automatically to the same card on ` +
  `${longDateLabel(plan.chargeDate)}.`
