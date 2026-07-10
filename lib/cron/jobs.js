import { syncContacts } from '@/lib/google/contacts'
import { processWaitlist } from '@/lib/waitlist/controllers'
import { syncAllMeetings } from '@/lib/meeting/controllers/syncAllMeetings'
import { sendPendingPaymentFollowups } from '@/lib/registration/controllers'
import { importDriveMeetings } from '@/lib/meetingImport/controllers'
import { syncAllEmails } from '@/lib/email/controllers/syncAllEmails'
import { syncLumaGuests } from '@/lib/luma/controllers/syncLumaGuests'
import { sendWeeklyDigestIfDue }
  from '@/lib/digest/controllers/sendWeeklyDigestIfDue'

// Every scheduled job, in the order the single daily cron runs them. The
// Cron page lists these and runs any one on demand, both through
// recordCronRun. Add a job here → it joins the daily run and the page.
export const CRON_JOBS = [
  { name: 'sync-contacts', label: 'Sync Google contacts', run: syncContacts },
  { name: 'process-waitlist',
    label: 'Advance the waitlist', run: processWaitlist },
  { name: 'sync-meetings',
    label: 'Sync Google Calendar meetings', run: syncAllMeetings },
  { name: 'sync-emails',
    label: 'Sync Gmail into contact activity', run: syncAllEmails },
  { name: 'import-meetings',
    label: 'Import meeting transcripts', run: importDriveMeetings },
  { name: 'payment-followups',
    label: 'Email unpaid registrants', run: sendPendingPaymentFollowups },
  { name: 'sync-luma',
    label: 'Sync Luma event guests', run: syncLumaGuests },
  { name: 'weekly-digest',
    label: 'Send weekly digest (Mondays)', run: sendWeeklyDigestIfDue }
]
