const CALENDAR_SCOPE =
  'https://www.googleapis.com/auth/calendar.readonly'

// Google OAuth options that also grant read-only Calendar access and a
// refresh token (offline + consent) for server-side meeting sync.
export function googleSignInOptions(redirectTo) {
  return {
    redirectTo,
    scopes: CALENDAR_SCOPE,
    queryParams: { access_type: 'offline', prompt: 'consent' }
  }
}
