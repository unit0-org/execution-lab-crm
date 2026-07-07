// The next major.minor after applying up/down deltas, floored at V1.0:
// major never drops below 1, minor never below 0. Each part moves on its
// own — bumping major leaves minor untouched.
export function nextVersion(offer, dMajor, dMinor) {
  return {
    version_major: Math.max(1, offer.version_major + dMajor),
    version_minor: Math.max(0, offer.version_minor + dMinor)
  }
}
