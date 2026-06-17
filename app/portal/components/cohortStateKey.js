// The design state key for a cohort card, from its window phase, seats,
// and early-bird status. Sold out takes priority over the window phase, so
// a filled cohort keeps reading "full" even after registration closes.
export function cohortStateKey(card) {
  if (card.spotsLeft <= 0) return 'full'

  if (card.phase === 'closed') return 'closed'

  if (card.phase === 'waitlist') return 'waitlist'

  if (card.pricing.discounted) return 'launch'

  return 'open'
}
