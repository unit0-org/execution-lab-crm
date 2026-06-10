import { siteOrigin } from './siteOrigin'

// The public link a registrant follows to finish paying.
export function payUrl(registrationId) {
  return `${siteOrigin()}/portal/pay/${registrationId}`
}
