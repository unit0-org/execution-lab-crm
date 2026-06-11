import { portalOrigin } from './portalOrigin'
import { siteOrigin } from './siteOrigin'

// The portal's public origin for absolute metadata (Open Graph image,
// canonical URLs): its own subdomain when set, else the CRM site origin.
export function portalPublicOrigin() {
  return portalOrigin() || siteOrigin()
}
