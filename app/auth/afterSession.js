import { rememberGoogleToken } from '@/lib/google/controllers/rememberToken'

// Post-sign-in side effects. Staff sign-in caches the Google refresh token
// for Calendar/Contacts sync; the portal member flow is a plain sign-in and
// must NOT store Google tokens.
export function afterSession(session, isPortal) {
  if (isPortal) return Promise.resolve()

  return rememberGoogleToken(session)
}
