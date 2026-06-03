import { stripe } from './client'

// Every succeeded charge (Stripe's "Payments" list), customer expanded
// for the buyer email, following pagination.
export async function listSucceededCharges() {
  const charges = []
  let after
  let more = true

  while (more) {
    const page = await stripe().charges.list({
      limit: 100, starting_after: after, expand: ['data.customer']
    })

    charges.push(...page.data.filter((c) => c.status === 'succeeded'))
    more = page.has_more
    after = page.data.at(-1)?.id
  }

  return charges
}
