// Stamp the paid fields from a completed Checkout Session onto the row.
// TODO(epic6): resolve promo code string
export async function markRegistrationPaid(registration, session) {
  registration.status = 'paid'
  registration.paid_at = new Date()
  registration.amount_total = session.amount_total
  registration.currency = session.currency || 'cad'
  registration.stripe_payment_intent_id = session.payment_intent
  registration.discount_total =
    session.total_details?.amount_discount ?? null
  registration.promo_code = null

  await registration.save()
}
