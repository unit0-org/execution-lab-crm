import { siteOrigin } from '@/lib/portal/siteOrigin'
import { portalPublicOrigin } from '@/lib/portal/portalPublicOrigin'

// The public origin to redirect back to after a Supabase callback, taken
// from configured env — NOT the request. Behind a proxy like Cloud Run the
// request host is the container's localhost:8080, so trusting it would
// bounce the user there.
export function callbackOrigin(isPortal) {
  return isPortal ? portalPublicOrigin() : siteOrigin()
}
