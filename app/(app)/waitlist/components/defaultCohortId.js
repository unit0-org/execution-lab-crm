// Start the accept picker on the applicant's own cohort when it's still
// open, else the soonest open one.
export function defaultCohortId(entry, cohorts) {
  const own = cohorts.find((cohort) => cohort.id === entry?.cohort_id)

  return own ? own.id : cohorts[0]?.id
}
