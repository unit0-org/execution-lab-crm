// The design state key for a cohort card, from its seats, window phase, and
// reward. Sold out takes priority over the phase, so a filled cohort keeps
// reading "full" even after registration closes. An early-bird cohort (one
// whose window hasn't opened) is a register state, not waitlist. "Launch
// price" is the cohort's own preset discount — a personal coupon leaves an
// open cohort reading "open"; the coupon banner explains that price.
export function cohortStateKey(card) {
  if (card.spotsLeft <= 0) return 'full'

  if (card.phase === 'closed') return 'closed'

  if (card.pricing.rewardKind === 'earlybird') return 'earlybird'

  if (card.pricing.discountSource === 'launch') return 'launch'

  return 'open'
}
