const isBuyable = (card) =>
  (card.phase === 'register' || card.phase === 'waitlist') &&
  card.spotsLeft > 0
const isSoldOut = (card) => card.spotsLeft <= 0

// The cohort to spotlight as the hero: the soonest one you can register for
// (registration open OR pre-registration with seats); else the soonest
// sold-out one (it stays the hero, showing SOLD OUT, until a successor is
// registerable); else whatever's left. (Cards arrive sorted soonest-first.)
export function featuredCohort(cohorts) {
  return cohorts.find(isBuyable)
    || cohorts.find(isSoldOut)
    || cohorts[0]
}
