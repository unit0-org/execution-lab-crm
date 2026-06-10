// Whether early-bird pricing still applies on the given ISO date.
export function isEarlyBird(cohort, today) {
  const deadline = cohort.early_bird_deadline

  return Boolean(deadline) && today <= deadline
}

// The Stripe price id in effect today (early-bird or regular).
export function activePriceId(cohort, today) {
  if (isEarlyBird(cohort, today)) return cohort.stripe_early_bird_price_id

  return cohort.stripe_price_id
}
