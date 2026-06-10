import { tryVerifyWebhook } from './tryVerifyWebhook'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'

// Verify a Stripe webhook against the env signing secret and return the
// event plus the organization id it belongs to.
export async function resolveWebhookEvent(body, signature) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const event = secret ? tryVerifyWebhook(body, signature, secret) : null

  if (!event) {
    throw new Error('No Stripe webhook secret matched the signature')
  }

  return { event, organizationId: await firstOrganizationId() }
}
