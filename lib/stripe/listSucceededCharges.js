import { stripe } from './client'

// Every succeeded charge (Stripe's "Payments" list), following pagination.
export async function listSucceededCharges(apiKey) {
  const charges = []
  let after
  let more = true

  while (more) {
    const page = await stripe(apiKey).charges.list({
      limit: 100, starting_after: after
    })

    charges.push(...page.data.filter((c) => c.status === 'succeeded'))
    more = page.has_more
    after = page.data.at(-1)?.id
  }

  return charges
}
