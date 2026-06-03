import { stripe } from './client'

// Every succeeded PaymentIntent, with its charge expanded for the email.
export async function listSucceededPayments() {
  const payments = []
  let after
  let more = true

  while (more) {
    const page = await stripe().paymentIntents.list({
      limit: 100, starting_after: after, expand: ['data.latest_charge']
    })

    payments.push(...page.data.filter((p) => p.status === 'succeeded'))
    more = page.has_more
    after = page.data.at(-1)?.id
  }

  return payments
}
