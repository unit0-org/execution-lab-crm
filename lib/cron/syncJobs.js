import { syncContacts } from '@/lib/google/contacts'
import { syncAllMeetings } from '@/lib/meeting/controllers/syncAllMeetings'
import { syncAllEmails } from '@/lib/email/controllers/syncAllEmails'
import { importDriveMeetings } from '@/lib/meetingImport/controllers'
import { syncLumaGuests } from '@/lib/luma/controllers/syncLumaGuests'

// The inbound-sync jobs, run first each day so later jobs see fresh data.
export const SYNC_JOBS = [
  { name: 'sync-contacts', label: 'Sync Google contacts', run: syncContacts },
  { name: 'sync-meetings',
    label: 'Sync Google Calendar meetings', run: syncAllMeetings },
  { name: 'sync-emails',
    label: 'Sync Gmail into contact activity', run: syncAllEmails },
  { name: 'import-meetings',
    label: 'Import meeting transcripts', run: importDriveMeetings },
  { name: 'sync-luma', label: 'Sync Luma event guests', run: syncLumaGuests }
]
