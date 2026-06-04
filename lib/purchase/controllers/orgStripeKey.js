import { getOrgSecret } from '@/lib/org/controllers/getOrgSecret'

// An organization's Stripe secret key, or null to fall back to env.
export function orgStripeKey(organizationId) {
  return getOrgSecret(organizationId, 'stripe_secret_key')
}
