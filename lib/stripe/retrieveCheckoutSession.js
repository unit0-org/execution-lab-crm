import { stripe } from './client'

// The Checkout Session for an id (confirmation screen reads name/email).
export async function retrieveCheckoutSession(apiKey, sessionId) {
  return await stripe(apiKey).checkout.sessions.retrieve(sessionId)
}
