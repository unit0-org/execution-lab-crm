import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'

// Format the confirmation copy from the payer + cohort start.
export function confirmationView(name, email, start) {
  const when = cohortMonthYear(start)
  const first = (name || '').trim().split(' ')[0]
  const cohort = start ? `${when.month} ${when.year}` : 'your'
  const to = email ? ` to ${email}` : ''

  return {
    title: first ? `You’re in, ${first}.` : 'You’re in.',
    blurb: `Your seat in the ${cohort} cohort is locked. A confirmation `
      + `and receipt are on the way${to}.`,
    kickoff: start ? when.startLabel.replace(/,.*/, '') : 'TBA'
  }
}
