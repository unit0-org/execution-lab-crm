import { sendConfirmation } from './sendConfirmation'
import { notifyTeam } from './notifyTeam'
import { dispatchWaitlistJoined }
  from '@/lib/automation/controllers/triggers/dispatchWaitlistJoined'

// A brand-new waitlist signup: confirm to the applicant and alert the
// internal team. Both are best-effort and never block the join.
export async function onWaitlistJoined(email, data) {
  await sendConfirmation(email, data.first_name)
  await notifyTeam({ ...data, email })
  await dispatchWaitlistJoined(email)
}
