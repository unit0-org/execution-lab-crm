const HOUR_MS = 60 * 60 * 1000

// True when the last sync happened within the past hour.
export function isFresh(lastSyncedAt) {
  if (!lastSyncedAt) return false

  return Date.now() - new Date(lastSyncedAt).getTime() < HOUR_MS
}
