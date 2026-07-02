const isLive = (card) => card.phase !== 'hidden'

// Live cohorts first (soonest start, as they arrive), then any sold-out
// cohort kept past its hide date — so the roster leads with what you can
// still join and the featured hero is never a past sell-out.
export function orderCohortCards(cards) {
  const live = cards.filter(isLive)
  const past = cards.filter((card) => !isLive(card))

  return [...live, ...past]
}
