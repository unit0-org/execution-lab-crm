// Fold one pair's result into the batch tally so far. The first failure's
// reason is the one the toast shows, so it is the one that is kept.
export function mergeSendResults(tally, result) {
  return {
    sent: tally.sent + (result?.sent || 0),
    failed: tally.failed + (result?.failed || 0),
    error: tally.error || result?.error
  }
}
