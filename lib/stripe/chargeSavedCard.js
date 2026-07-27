import { stripe } from './client'

// Charge a card already on file, with nobody present to confirm it. Stripe
// throws when the card declines or the issuer demands authentication — the
// caller records that and asks the customer to pay it themselves.
export async function chargeSavedCard(apiKey, params) {
  const intent = await stripe(apiKey).paymentIntents.create({
    amount: params.amountCents,
    currency: params.currency,
    customer: params.customerId,
    payment_method: params.paymentMethodId,
    off_session: true,
    confirm: true,
    description: params.description,
    metadata: params.metadata
  })

  return { intentId: intent.id, chargeId: intent.latest_charge }
}
