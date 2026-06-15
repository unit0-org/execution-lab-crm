// Pair each job with its most recent run (runs arrive newest-first), so
// the Cron page can show each operation's last status.
export function attachLatestRun(jobs, runs) {
  return jobs.map(job => ({
    ...job,
    lastRun: runs.find(run => run.name === job.name) || null
  }))
}
