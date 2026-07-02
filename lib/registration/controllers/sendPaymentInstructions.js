import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'
import { HOLD_HOURS } from '@/lib/cohort/controllers/holdPolicy'
import { payUrl } from '@/lib/portal/payUrl'
import { markFollowupSent } from './markFollowupSent'

// Email a fresh registrant their link to finish paying and the hold
// window, right away. Stamps the follow-up column on a real send so the
// daily cron never re-nudges someone we've already emailed.
export async function sendPaymentInstructions(reg, cohort) {
  const res = await sendTemplatedEmail('payment_pending', reg.email, {
    first_name: reg.first_name,
    cohort_name: cohort.label,
    hold_hours: HOLD_HOURS,
    pay_url: payUrl(reg.id)
  })

  if (!res?.skipped) await markFollowupSent(reg.id)

  return res
}
