import { seatNote } from './seatNote'

// Cohort choices for the accept picker, each labelled with its seat count.
export function cohortSelectOptions(cohorts) {
  return cohorts.map((cohort) => ({
    value: cohort.id,
    label: `${cohort.label} — ${seatNote(cohort)}`
  }))
}
