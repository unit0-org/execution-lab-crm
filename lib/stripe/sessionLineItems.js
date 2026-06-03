import { stripe } from './client'

// The product descriptions on a Checkout Session.
export async function sessionLineItems(sessionId) {
  const items = await stripe().checkout.sessions.listLineItems(sessionId, {
    limit: 20
  })

  return items.data.map((item) => item.description).filter(Boolean)
}
