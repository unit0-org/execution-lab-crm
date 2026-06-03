import { stripe } from './client'

// Every completed Checkout Session, following pagination.
export async function listPaidSessions() {
  const sessions = []
  let after
  let more = true

  while (more) {
    const page = await stripe().checkout.sessions.list({
      limit: 100, status: 'complete', starting_after: after
    })

    sessions.push(...page.data)
    more = page.has_more
    after = page.data.at(-1)?.id
  }

  return sessions
}
