import { sendConfirmation } from './sendConfirmation'
import { notifyTeam } from './notifyTeam'

// A brand-new waitlist signup: confirm to the applicant and alert the
// internal team. Both are best-effort and never block the join.
export async function onWaitlistJoined(email, data) {
  await sendConfirmation(email, data.first_name)
  await notifyTeam({ ...data, email })
}
