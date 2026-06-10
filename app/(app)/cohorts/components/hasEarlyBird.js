// True when a cohort already has early-bird pricing configured.
export function hasEarlyBird(values) {
  const priceId = values.stripe_early_bird_price_id
  const deadline = values.early_bird_deadline

  return Boolean(priceId || deadline)
}
