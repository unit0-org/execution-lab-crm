// The off-session charge for a seat's second half. The metadata is what
// ties the resulting charge back to this seat in Stripe's own dashboard.
export function balanceChargeParams(owed, card, registration, cohort) {
  return {
    amountCents: owed.amountCents,
    currency: owed.currency,
    customerId: card.customerId,
    paymentMethodId: card.paymentMethodId,
    description: `${cohort.label} — 50% balance`,
    metadata: {
      registration_id: registration.id, cohort_id: cohort.id
    }
  }
}
