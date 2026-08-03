import { getCohort } from '@/lib/cohort/controllers'
import { sendTemplatedEmail }
  from '@/lib/email/controllers/sendTemplatedEmail'
import { holdEndsAt } from '@/lib/registration/models/holdEndsAt'
import { reservationVars } from './reservationVars'
import { markReservationReminded } from './markReservationReminded'

// Warn one person that their reserved seat is about to be released, then
// stamp it so the cron never warns them twice. The release date is derived
// from their own reserved_at, so it's the same date the seat really goes.
export async function sendReservationReminder(reg) {
  const cohort = await getCohort(reg.cohort_id)
  const vars = reservationVars({
    person: reg,
    cohort,
    registrationId: reg.id,
    releasesAt: holdEndsAt(reg)
  })

  await sendTemplatedEmail('seat_reservation_reminder', reg.email, vars)
  await markReservationReminded(reg.id)
}
