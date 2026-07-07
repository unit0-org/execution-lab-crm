const CALENDAR_SCOPE =
  'https://www.googleapis.com/auth/calendar.readonly'
const CONTACTS_SCOPE = 'https://www.googleapis.com/auth/contacts'
const GMAIL_SCOPE = 'https://www.googleapis.com/auth/gmail.readonly'

// Google OAuth options that also grant read-only Calendar + Gmail and
// read/write Contacts access, plus a refresh token (offline + consent) for
// server-side meeting, email and contact sync.
export function googleSignInOptions(redirectTo) {
  return {
    redirectTo,
    scopes: `${CALENDAR_SCOPE} ${CONTACTS_SCOPE} ${GMAIL_SCOPE}`,
    queryParams: { access_type: 'offline', prompt: 'consent' }
  }
}
