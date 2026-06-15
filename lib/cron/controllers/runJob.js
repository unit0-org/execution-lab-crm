import { CRON_JOBS } from '../jobs'
import { recordCronRun } from './recordCronRun'

// Run a single named job through the cron log. The outcome is persisted by
// recordCronRun; any failure is swallowed here and reported as {ok:false}
// so a manual run or the daily sequence never throws.
export async function runJob(name) {
  const job = CRON_JOBS.find(candidate => candidate.name === name)

  if (!job) throw new Error(`unknown cron job: ${name}`)

  try {
    await recordCronRun(name, job.run)

    return { name, ok: true }
  } catch {
    return { name, ok: false }
  }
}
