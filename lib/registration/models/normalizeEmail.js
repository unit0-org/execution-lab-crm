// Canonical form for a registration email: trimmed + lowercased, so a
// person is one row per cohort no matter how they typed their address.
export function normalizeEmail(value) {
  return (value || '').trim().toLowerCase()
}
