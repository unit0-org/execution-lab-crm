import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { retrieveCheckoutSession } from '@/lib/stripe/retrieveCheckoutSession'

const EMPTY = { name: '', email: '' }

// Name + email from a Checkout Session for the confirmation screen; falls
// back to blanks so a Stripe hiccup never breaks the page.
export async function sessionContact(sessionId) {
  if (!sessionId) return EMPTY

  try {
    const apiKey = stripeApiKey()
    const session = await retrieveCheckoutSession(apiKey, sessionId)

    return {
      name: session.customer_details?.name || '', email: session.customer_email
    }
  } catch {
    return EMPTY
  }
}
