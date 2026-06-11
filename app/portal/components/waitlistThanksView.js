import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'

// Format the join result for the confirmation screen. We never surface the
// list position or wave number — that would reveal how short the list is.
export function waitlistThanksView(result) {
  const r = result || {}
  const when = cohortMonthYear(r.start)
  const cohort = r.start ? `${when.month} ${when.year}` : 'your chosen'
  const email = r.email || 'your inbox'

  return {
    blurb: `You’re in line for the ${cohort} cohort. We’ll email `
      + `${email} the moment your wave opens.`,
    seats: r.capacity || 6
  }
}
