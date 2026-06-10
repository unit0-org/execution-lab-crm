import { siteOrigin } from './siteOrigin'
import { portalOrigin } from './portalOrigin'

// Absolute URL to a portal page. On its own subdomain the path is used
// as-is (the proxy adds /portal); otherwise we prefix /portal on the CRM
// origin. `path` always starts with '/', e.g. '/register/abc'.
export function portalUrl(path) {
  const origin = portalOrigin()

  if (origin) return `${origin}${path}`

  return `${siteOrigin()}/portal${path}`
}
