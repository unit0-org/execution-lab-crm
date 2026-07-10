// Never-contacted contacts first, then the longest-stale (oldest activity).
export function compareFollowUps(a, b) {
  if (a.neverContacted !== b.neverContacted) {
    return a.neverContacted ? -1 : 1
  }

  if (a.neverContacted) return 0

  return a.lastActivity - b.lastActivity
}
