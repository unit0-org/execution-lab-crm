const CALENDAR_SCOPE =
  'https://www.googleapis.com/auth/calendar.readonly'
const CONTACTS_SCOPE = 'https://www.googleapis.com/auth/contacts'
const TASKS_SCOPE = 'https://www.googleapis.com/auth/tasks'

// Google OAuth options that also grant read-only Calendar, read/write
// Contacts and read/write Tasks access, plus a refresh token (offline +
// consent) for server-side meeting, contact and task sync.
export function googleSignInOptions(redirectTo) {
  return {
    redirectTo,
    scopes: `${CALENDAR_SCOPE} ${CONTACTS_SCOPE} ${TASKS_SCOPE}`,
    queryParams: { access_type: 'offline', prompt: 'consent' }
  }
}
