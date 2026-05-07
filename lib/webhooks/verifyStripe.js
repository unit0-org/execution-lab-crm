import Stripe from 'stripe'

let client
const stripe = () => {
  if (!client && process.env.STRIPE_SECRET_KEY) {
    client = new Stripe(process.env.STRIPE_SECRET_KEY)
  }

  return client
}

export function verifyStripe(rawBody, signature) {
  const c = stripe()
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!c || !secret || !signature) return null
  try { return c.webhooks.constructEvent(rawBody, signature, secret) }
  catch { return null }
}
