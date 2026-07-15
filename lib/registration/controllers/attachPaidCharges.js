import { paidChargesForRegistrations }
  from '@/lib/purchase/controllers/paidChargesForRegistrations'
import { paymentDashboardUrl } from '@/lib/stripe/paymentDashboardUrl'

const withCharge = (registration, purchase) => ({
  ...registration,
  paid_amount_cents: purchase ? purchase.amount_cents : null,
  stripe_url: paymentDashboardUrl(purchase ? purchase.stripe_id : null)
})

// Enrich registrations with what Stripe actually captured for each seat: the
// real amount and a dashboard link, from the matched succeeded purchase.
export async function attachPaidCharges(registrations) {
  const charges = await paidChargesForRegistrations(registrations)

  return registrations.map((r) => withCharge(r, charges.get(r.id)))
}
