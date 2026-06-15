import { CRON_JOBS } from '../jobs'
import { runJob } from './runJob'

// The daily cron's work: run every job in order. A failure is logged and
// doesn't stop the rest. Returns a per-job {name, ok} summary.
export async function runAllJobs() {
  const ran = []

  for (const job of CRON_JOBS) {
    const result = await runJob(job.name)

    ran.push(result)
  }

  return ran
}
