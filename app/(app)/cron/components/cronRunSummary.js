// A compact one-line summary of what a cron run did — its scalar result
// counts (nested detail stays in the stored result), or the error message
// when the run failed.
export function runSummary(run) {
  if (run.error) return run.error

  if (!run.result) return '—'

  return Object.entries(run.result)
    .filter(([, value]) => typeof value !== 'object')
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ')
}
