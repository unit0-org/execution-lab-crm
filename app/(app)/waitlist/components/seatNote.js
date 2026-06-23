// Short seat status for a cohort option: "Full" or "N seat(s) left".
export function seatNote(cohort) {
  if (cohort.full) return 'Full'

  const { spotsLeft } = cohort
  const unit = spotsLeft === 1 ? 'seat' : 'seats'

  return `${spotsLeft} ${unit} left`
}
