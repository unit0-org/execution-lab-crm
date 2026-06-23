// The design state key for a cohort card, from its seats, window phase, and
// reward. Sold out takes priority over the phase, so a filled cohort keeps
// reading "full" even after registration closes. Pre-window and early-bird
// cohorts are register states (the 20% reward), not waitlist.
export function cohortStateKey(card) {
  if (card.spotsLeft <= 0) return 'full'

  if (card.phase === 'closed') return 'closed'

  if (card.pricing.rewardKind === 'prereg') return 'prereg'

  if (card.pricing.rewardKind === 'earlybird') return 'earlybird'

  if (card.pricing.discounted) return 'launch'

  return 'open'
}
