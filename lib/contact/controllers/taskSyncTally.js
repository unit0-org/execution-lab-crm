// Tally reconcile outcomes into counts for the cron run log.
export function taskSyncTally(outcomes) {
  const count = (kind) => outcomes.filter((outcome) => outcome === kind).length

  return {
    applied: count('applied'),
    deleted: count('deleted'),
    ignored: count('ignored')
  }
}
