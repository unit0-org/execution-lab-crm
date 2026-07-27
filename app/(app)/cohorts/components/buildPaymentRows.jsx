import { DateText } from '@/ui/atoms/DateText'
import { formatDollars } from '@/lib/portal/formatDollars'
import { PaymentStatus } from './PaymentStatus'
import { stripeLink } from './stripeLink'
import { buildPlanRows } from './buildPlanRows'

// Label/value rows for a registrant's payment, dropping the empty ones. When
// we matched the real Stripe charges, Amount and the Stripe link reflect
// them, and the seat's list-price discount is hidden as it no longer
// applies. A seat on the plan also shows its scheduled second half.
export function buildPaymentRows(registration) {
  const r = registration
  const cents = r.paid_amount_cents ?? r.amount_total
  const amount = cents ? formatDollars(cents) : null
  const seedDiscount = r.paid_amount_cents ? null : r.discount_total
  const discount = seedDiscount ? formatDollars(seedDiscount) : null
  const paid = r.paid_at ? <DateText value={r.paid_at} /> : null

  const rows = [
    { label: 'Status', value: <PaymentStatus registration={r} /> },
    { label: 'Amount', value: amount },
    { label: 'Stripe', value: stripeLink(r.stripe_url) },
    { label: 'Discount', value: discount },
    { label: 'Promo code', value: r.promo_code },
    { label: 'Registered', value: <DateText value={r.created_at} /> },
    { label: 'Paid', value: paid },
    ...buildPlanRows(r)
  ]

  return rows.filter((row) => row.value)
}
