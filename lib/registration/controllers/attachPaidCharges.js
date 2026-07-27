import { paidChargesForRegistrations }
  from '@/lib/purchase/controllers/paidChargesForRegistrations'
import { paymentDashboardUrl } from '@/lib/stripe/paymentDashboardUrl'
import { installmentChargeIds } from './installmentChargeIds'
import { sumChargedCents } from './sumChargedCents'

const firstStripeId = (purchases) =>
  purchases.length ? purchases[0].stripe_id : null

const withCharges = (registration, purchases) => ({
  ...registration,
  paid_amount_cents: sumChargedCents(purchases),
  charge_count: purchases.length,
  stripe_url: paymentDashboardUrl(firstStripeId(purchases))
})

// Enrich registrations with what Stripe actually captured for each seat —
// the sum of every charge behind it, so a seat paid in two halves reads as
// what it really paid, not half of it — plus a dashboard link.
export async function attachPaidCharges(registrations) {
  const chargeIds = await installmentChargeIds(registrations)
  const charges = await paidChargesForRegistrations(registrations, chargeIds)

  return registrations.map((r) => withCharges(r, charges.get(r.id)))
}
