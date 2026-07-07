const TWO_YEARS_DAYS = 730
const DAY_MS = 24 * 60 * 60 * 1000

const gmailDate = (date) =>
  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

const lowerBound = (syncedAt) => {
  if (!syncedAt) return new Date(Date.now() - TWO_YEARS_DAYS * DAY_MS)

  return new Date(new Date(syncedAt).getTime() - DAY_MS)
}

// The Gmail search selecting the mail to (re)pull: a 2-year backfill on the
// first sync, else everything since the last run (less a day's overlap so a
// message that landed mid-run isn't missed). Chats are excluded.
export function emailSyncWindow(syncedAt) {
  return `after:${gmailDate(lowerBound(syncedAt))} -in:chats`
}
