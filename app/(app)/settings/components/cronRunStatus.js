// Status badge tone, label, and elapsed time for a cron_run row.

export function runTone(run) {
  return run.ok ? 'success' : 'error'
}

export function runLabel(run) {
  return run.ok ? 'OK' : 'Failed'
}

export function runDuration(run) {
  if (!run.finished_at) return '—'

  const ms = new Date(run.finished_at) - new Date(run.started_at)

  return `${(ms / 1000).toFixed(1)}s`
}
