import { portalOrigin } from './portalOrigin'

// The in-origin path of a portal page, matching where the proxy serves it:
// '/x' on the portal subdomain (the proxy adds /portal), or '/portal/x'
// under the CRM origin. The path-only mirror of portalUrl.
export function portalRoutePath(path) {
  return portalOrigin() ? path : `/portal${path}`
}
