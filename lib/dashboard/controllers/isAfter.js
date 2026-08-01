// True when a signal date falls strictly after the attendee's first
// check-in. Strictly, so the check-in that put them in the funnel never
// counts as its own follow-up touch.
export function isAfter(date, first) {
  if (!date) return false

  return date > first
}
