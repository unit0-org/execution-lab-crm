import { redirect } from 'next/navigation'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

// Back to the portal sign-in screen carrying a query the status hook reads.
// Portal sign-in never falls back to the staff login, whichever method failed.
export function backToSignIn(query) {
  redirect(`${portalRoutePath('/signin')}?${query}`)
}

export function signInFailed(message) {
  backToSignIn(`error=${encodeURIComponent(message)}`)
}
