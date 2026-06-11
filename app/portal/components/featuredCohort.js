// The cohort to spotlight as the hero: the soonest one still open to
// register, else the soonest upcoming, else the soonest of whatever's
// left. (Cards arrive sorted soonest-first.)
export function featuredCohort(cohorts) {
  const open = cohorts.find((card) => card.phase === 'register')

  if (open) return open

  const upcoming = cohorts.find((card) => card.phase === 'waitlist')

  return upcoming || cohorts[0]
}
