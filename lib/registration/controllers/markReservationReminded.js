import { Registration } from '@/lib/registration/models'

// Record that the pre-release warning has gone out, so the daily cron
// never warns the same reservation twice.
export function markReservationReminded(registrationId) {
  return Registration.update(
    { reservation_reminder_sent_at: new Date() },
    { where: { id: registrationId } }
  )
}
