import { portalUrl } from './portalUrl'

// The public link a registrant follows to finish paying.
export function payUrl(registrationId) {
  return portalUrl(`/pay/${registrationId}`)
}
