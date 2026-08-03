import { RESERVATION_HOLD_DAYS } from '@/lib/cohort/controllers/holdPolicy'
import { reserveUrl } from '@/lib/portal/reserveUrl'
import { isoDate } from '@/lib/portal/isoDate'
import { longDateLabel } from '@/lib/portal/longDateLabel'

// Template variables shared by both reservation emails: who it's for, the
// cohort, the link that completes their registration, and the day the seat
// is released — as a business-local calendar day, so the deadline reads the
// same to them as it does to us.
export function reservationVars(
  { person, cohort, registrationId, releasesAt }
) {
  return {
    first_name: person.first_name,
    cohort_name: cohort ? cohort.label : '',
    hold_days: RESERVATION_HOLD_DAYS,
    release_date: longDateLabel(isoDate(releasesAt)),
    register_url: reserveUrl(cohort ? cohort.slug : '', registrationId)
  }
}
