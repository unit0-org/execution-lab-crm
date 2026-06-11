// The design state key for a cohort card, from its window phase, seats,
// and early-bird status.
export function cohortStateKey(card) {
  if (card.phase === 'closed') return 'closed'

  if (card.phase === 'waitlist') return 'waitlist'

  if (card.spotsLeft <= 0) return 'full'

  if (card.pricing.earlyBird) return 'launch'

  return 'open'
}
