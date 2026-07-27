import { DateText } from '@/ui/atoms/DateText'
import { stripeLink } from './stripeLink'

const chargeLabel = (r) => (r.plan_settled ? 'Balance paid' : 'Balance due')

// The payment plan's second half, for the registration's payment panel:
// when it is taken, what came of it, and why it failed if it did. Empty
// for a seat that isn't on the plan.
export function buildPlanRows(registration) {
  const r = registration

  if (!r.plan_due_on) return []

  return [
    { label: chargeLabel(r), value: <DateText value={r.plan_due_on} /> },
    { label: 'Balance Stripe', value: stripeLink(r.plan_stripe_url) },
    { label: 'Balance error', value: r.plan_last_failure }
  ]
}
