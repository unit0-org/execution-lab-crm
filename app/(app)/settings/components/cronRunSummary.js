// A compact one-line summary of what a cron run did (its result counts),
// or the error message when the run failed.
export function runSummary(run) {
  if (run.error) return run.error

  if (!run.result) return '—'

  return Object.entries(run.result)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ')
}
