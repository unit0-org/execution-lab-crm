// An offer's version as a display string, e.g. "V1.0".
export function versionLabel(offer) {
  return 'V' + offer.version_major + '.' + offer.version_minor
}
