import { verifyWebhookSignature } from './verifyWebhookSignature'

// Verify a Luma webhook against the env signing secret and return the
// parsed event. Throws if the signature doesn't check out.
export function resolveWebhookEvent(body, signature) {
  const secret = process.env.LUMA_WEBHOOK_SECRET

  if (!secret || !verifyWebhookSignature(body, signature, secret))
    throw new Error('Luma webhook signature did not verify')

  return JSON.parse(body)
}
