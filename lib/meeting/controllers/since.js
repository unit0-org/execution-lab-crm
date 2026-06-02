const DAY_MS = 24 * 60 * 60 * 1000

// ISO timestamp for `days` ago — the lower bound of the meeting sync.
export function since(days) {
  return new Date(Date.now() - days * DAY_MS).toISOString()
}
