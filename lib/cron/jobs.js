import { processWaitlist } from '@/lib/waitlist/controllers'
import { sendPendingPaymentFollowups } from '@/lib/registration/controllers'
import { sendWeeklyDigestIfDue }
  from '@/lib/digest/controllers/sendWeeklyDigestIfDue'
import { runContactBirthdays }
  from '@/lib/automation/controllers/triggers/runContactBirthdays'
import { SYNC_JOBS } from './syncJobs'

// Every scheduled job, in the order the single daily cron runs them (syncs
// first). Add a job here → it joins the daily run and the Cron page, both
// through recordCronRun.
export const CRON_JOBS = [
  ...SYNC_JOBS,
  { name: 'process-waitlist',
    label: 'Advance the waitlist', run: processWaitlist },
  { name: 'payment-followups',
    label: 'Email unpaid registrants', run: sendPendingPaymentFollowups },
  { name: 'weekly-digest',
    label: 'Send weekly digest (Mondays)', run: sendWeeklyDigestIfDue },
  { name: 'automation-birthdays',
    label: 'Fire birthday automations', run: runContactBirthdays }
]
