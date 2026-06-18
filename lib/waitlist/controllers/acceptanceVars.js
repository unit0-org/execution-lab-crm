import { payUrl } from '@/lib/portal/payUrl'

// Template variables for the waitlist-acceptance payment email: who it's
// for, the cohort, and the link to finish paying.
export function acceptanceVars(entry, cohort, registrationId) {
  return {
    first_name: entry.first_name,
    cohort_name: cohort ? cohort.label : '',
    pay_url: payUrl(registrationId)
  }
}
