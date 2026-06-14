import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'
import { teamRecipients } from '@/lib/registration/controllers/teamRecipients'

// Alert the internal team that someone new joined the waitlist; swallow
// failures so a flaky mailer never blocks the join itself.
export async function notifyTeam(data) {
  try {
    await sendTemplatedEmail(
      'waitlist_team_notification', teamRecipients(), {
        first_name: data.first_name,
        last_name: data.last_name || '',
        email: data.email,
        business: data.business || '',
        challenge: data.challenge || ''
      }
    )
  } catch {
    // best-effort: the entry is saved regardless
  }
}
