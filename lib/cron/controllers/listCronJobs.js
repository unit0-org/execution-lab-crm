import { CRON_JOBS } from '../jobs'

// The cron jobs as plain metadata (no run functions), safe to pass to the
// Cron page's client components.
export function listCronJobs() {
  return CRON_JOBS.map(({ name, label }) => ({ name, label }))
}
