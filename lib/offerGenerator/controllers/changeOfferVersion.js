import { Offer } from '../models'

// Bump one of the contact's offers up or down by version deltas; returns
// the new { version_major, version_minor }.
export function changeOfferVersion(contactId, offerId, dMajor, dMinor) {
  return Offer.changeVersion(contactId, offerId, dMajor, dMinor)
}
