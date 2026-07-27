import { portalUrl } from './portalUrl'

// The public link a registrant follows to pay a balance we couldn't take
// from their card.
export function balanceUrl(installmentId) {
  return portalUrl(`/pay-balance/${installmentId}`)
}
