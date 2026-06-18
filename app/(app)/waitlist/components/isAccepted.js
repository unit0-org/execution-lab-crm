const DONE = ['accepted', 'converted']

// True once an entry has been accepted into a cohort (or already paid), so
// we don't accept — and double-register — the same person again.
export function isAccepted(entry) {
  return DONE.includes(entry.status)
}
