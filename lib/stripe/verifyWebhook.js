import { stripe } from './client'

// Verify a Stripe webhook payload and return the parsed event.
export function verifyWebhook(payload, signature) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET

  return stripe().webhooks.constructEvent(payload, signature, secret)
}
