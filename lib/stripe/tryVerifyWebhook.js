import { stripe } from './client'

// Verify a webhook signature against one secret; null if it doesn't match.
export function tryVerifyWebhook(body, signature, secret) {
  try {
    return stripe().webhooks.constructEvent(body, signature, secret)
  } catch {
    return null
  }
}
