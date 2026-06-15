import { Registration } from '@/lib/registration/models'

// Record that the automatic payment follow-up email has gone out, so the
// daily cron never emails the same registration twice.
export function markFollowupSent(registrationId) {
  return Registration.update(
    { payment_followup_sent_at: new Date() },
    { where: { id: registrationId } }
  )
}
