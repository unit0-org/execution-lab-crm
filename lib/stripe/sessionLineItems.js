import { stripe } from './client'

// The product descriptions on a Checkout Session.
export async function sessionLineItems(sessionId, apiKey) {
  const items = await stripe(apiKey).checkout.sessions.listLineItems(
    sessionId, { limit: 20 }
  )

  return items.data.map((item) => item.description).filter(Boolean)
}
