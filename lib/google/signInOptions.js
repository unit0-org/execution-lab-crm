const CALENDAR_SCOPE =
  'https://www.googleapis.com/auth/calendar.readonly'
const CONTACTS_SCOPE = 'https://www.googleapis.com/auth/contacts'

// Google OAuth options that also grant read-only Calendar + read/write
// Contacts access and a refresh token (offline + consent) for server-side
// meeting and contact sync.
export function googleSignInOptions(redirectTo) {
  return {
    redirectTo,
    scopes: `${CALENDAR_SCOPE} ${CONTACTS_SCOPE}`,
    queryParams: { access_type: 'offline', prompt: 'consent' }
  }
}
