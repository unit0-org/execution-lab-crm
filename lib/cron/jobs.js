import { syncContacts } from '@/lib/google/contacts'
import { processWaitlist } from '@/lib/waitlist/controllers'
import { syncAllMeetings }
  from '@/lib/meeting/controllers/syncAllMeetings'
import { sendPendingPaymentFollowups }
  from '@/lib/registration/controllers'

// Every scheduled job, in the order the single daily cron runs them. The
// Cron page lists these and can run any one on demand; both the cron and a
// manual run go through recordCronRun, so each shows up in the run log.
// Add a job here and it appears in both the daily run and the Cron page.
export const CRON_JOBS = [
  { name: 'sync-contacts',
    label: 'Sync Google contacts', run: syncContacts },
  { name: 'process-waitlist',
    label: 'Advance the waitlist', run: processWaitlist },
  { name: 'sync-meetings',
    label: 'Sync Google Calendar meetings', run: syncAllMeetings },
  { name: 'payment-followups',
    label: 'Email unpaid registrants',
    run: sendPendingPaymentFollowups }
]
