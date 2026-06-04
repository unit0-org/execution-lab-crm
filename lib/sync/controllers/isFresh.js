// True when the last sync happened within the past maxAgeMs.
export function isFresh(lastSyncedAt, maxAgeMs) {
  if (!lastSyncedAt) return false

  return Date.now() - new Date(lastSyncedAt).getTime() < maxAgeMs
}
