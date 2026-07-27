import { stripe } from './client'

// The customer and card kept on file by a deposit's PaymentIntent — what a
// later off-session charge needs. Read from Stripe rather than stored here,
// so the card of record is always the one Stripe actually holds.
export async function retrieveSavedCard(intentId, apiKey) {
  if (!intentId) throw new Error('no deposit payment intent to charge')

  const intent = await stripe(apiKey).paymentIntents.retrieve(intentId)

  return {
    customerId: intent.customer,
    paymentMethodId: intent.payment_method
  }
}
