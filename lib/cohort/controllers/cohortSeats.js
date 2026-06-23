import { spotsLeft } from './spotsLeft'

// A cohort reduced to what the accept picker needs: its label and seat
// counts, with a `full` flag once no confirmed seats remain.
export function cohortSeats(cohort, stats) {
  const filled = stats[cohort.id]?.filled || 0
  const left = spotsLeft(cohort.capacity, filled)

  return {
    id: cohort.id,
    label: cohort.label,
    spotsLeft: left,
    full: left === 0
  }
}
