// Throw when the cohort form is missing a required field, or early-bird
// pricing is half-filled; otherwise return the data for chaining.
export function assertCohortData(data) {
  if (!data.label) throw new Error('Label is required')

  if (!data.start_date) throw new Error('Start date is required')

  const hasPrice = Boolean(data.stripe_early_bird_price_id)
  const hasDeadline = Boolean(data.early_bird_deadline)

  if (hasPrice !== hasDeadline)
    throw new Error('Early-bird pricing needs a price ID and a deadline')

  return data
}
