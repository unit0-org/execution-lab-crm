// The version pair the configurator header renders, from an offer row.
export function offerVersionOf(offer) {
  return {
    version_major: offer.version_major,
    version_minor: offer.version_minor
  }
}
