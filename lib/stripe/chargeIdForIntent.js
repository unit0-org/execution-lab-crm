import { stripe } from './client'

// The charge a PaymentIntent actually produced — what `purchase` is keyed
// by, so an installment can be tied to the money it brought in.
export async function chargeIdForIntent(intentId, apiKey) {
  const intent = await stripe(apiKey).paymentIntents.retrieve(intentId)

  return intent.latest_charge
}
