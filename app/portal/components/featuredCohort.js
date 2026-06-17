const isBuyable = (card) => card.phase === 'register' && card.spotsLeft > 0
const isSoldOut = (card) => card.spotsLeft <= 0

// The cohort to spotlight as the hero: the soonest one open with seats;
// else the soonest sold-out one (it stays the hero, showing SOLD OUT, until
// a successor opens for registration); else the soonest upcoming; else
// whatever's left. (Cards arrive sorted soonest-first.)
export function featuredCohort(cohorts) {
  return cohorts.find(isBuyable)
    || cohorts.find(isSoldOut)
    || cohorts.find((card) => card.phase === 'waitlist')
    || cohorts[0]
}
