const CALENDAR_SCOPE =
  'https://www.googleapis.com/auth/calendar.readonly'
const CONTACTS_SCOPE = 'https://www.googleapis.com/auth/contacts'
const GMAIL_SCOPE = 'https://www.googleapis.com/auth/gmail.readonly'
const TASKS_SCOPE = 'https://www.googleapis.com/auth/tasks'

const SCOPES =
  `${CALENDAR_SCOPE} ${CONTACTS_SCOPE} ${GMAIL_SCOPE} ${TASKS_SCOPE}`

// Google OAuth options granting read-only Calendar + Gmail, read/write
// Contacts and Tasks, plus a refresh token (offline + consent) for
// server-side meeting, email, contact and task sync.
export function googleSignInOptions(redirectTo) {
  return {
    redirectTo,
    scopes: SCOPES,
    queryParams: { access_type: 'offline', prompt: 'consent' }
  }
}
