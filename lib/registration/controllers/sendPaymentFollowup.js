import { getCohort } from '@/lib/cohort/controllers'
import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'
import { payUrl } from '@/lib/portal/payUrl'
import { markFollowupSent } from './markFollowupSent'

// Email one pending registrant the automatic payment follow-up, then stamp
// it so the cron never emails them again.
export async function sendPaymentFollowup(reg) {
  const cohort = await getCohort(reg.cohort_id)

  await sendTemplatedEmail('payment_followup', reg.email, {
    first_name: reg.first_name,
    cohort_name: cohort ? cohort.label : '',
    pay_url: payUrl(reg.id)
  })
  await markFollowupSent(reg.id)
}
