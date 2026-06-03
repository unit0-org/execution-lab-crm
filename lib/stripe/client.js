import Stripe from 'stripe'

let client

// Lazily build the Stripe client so a missing key never breaks the build.
export function stripe() {
  if (!client) client = new Stripe(process.env.STRIPE_SECRET_KEY)

  return client
}
