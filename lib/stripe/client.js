import Stripe from 'stripe'

// A Stripe client for the given key, falling back to the env key.
export function stripe(apiKey) {
  return new Stripe(apiKey || process.env.STRIPE_SECRET_KEY)
}
