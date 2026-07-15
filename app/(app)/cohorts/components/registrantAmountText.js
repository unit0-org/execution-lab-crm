import { formatDollars } from '@/lib/portal/formatDollars'

// The seat's real captured amount when we matched a Stripe charge, else the
// amount recorded on the registration.
export function registrantAmountText(registration) {
  const cents = registration.paid_amount_cents ?? registration.amount_total

  return formatDollars(cents)
}
