import { tryVerifyWebhook } from './tryVerifyWebhook'
import { matchOrgWebhookSecret } from './matchOrgWebhookSecret'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'

const matchEnvSecret = async (body, signature) => {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const event = secret ? tryVerifyWebhook(body, signature, secret) : null

  if (!event) return null

  return { event, organizationId: await firstOrganizationId() }
}

// Verify a Stripe webhook against each org's stored signing secret (or the
// env fallback) and return the event plus its owning organization id.
export async function resolveWebhookEvent(body, signature) {
  const matched = await matchOrgWebhookSecret(body, signature)

  if (matched) return matched

  const env = await matchEnvSecret(body, signature)

  if (env) return env

  throw new Error('No Stripe webhook secret matched the signature')
}
