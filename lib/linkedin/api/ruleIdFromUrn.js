// Rule endpoints take the bare id, while everywhere else names the rule by
// URN (urn:lla:llaPartnerConversion:27490364 → 27490364).
export function ruleIdFromUrn(urn) {
  return String(urn).split(':').pop()
}
