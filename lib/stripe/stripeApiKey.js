// The platform-wide Stripe secret key, from the environment.
export function stripeApiKey() {
  return process.env.STRIPE_SECRET_KEY || null
}
