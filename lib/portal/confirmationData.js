import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { retrieveCheckoutSession } from '@/lib/stripe/retrieveCheckoutSession'
import { Cohort } from '@/lib/cohort/models'

const EMPTY = { name: '', email: '', start: null }

// Name, email, and the cohort start date for the confirmation screen,
// from the Checkout Session; blanks on any Stripe hiccup so the page
// never breaks.
export async function confirmationData(sessionId) {
  if (!sessionId) return EMPTY

  try {
    const session = await retrieveCheckoutSession(stripeApiKey(), sessionId)
    const cohort = await Cohort.findByPk(session.metadata?.cohort_id)

    return {
      name: session.customer_details?.name || '',
      email: session.customer_email || '',
      start: cohort?.start_date || null
    }
  } catch {
    return EMPTY
  }
}
