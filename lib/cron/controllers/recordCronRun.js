import { CronRun } from '../models/CronRun'

// Run a cron's work, persist the outcome (timing, result, error) to
// cron_run, and return the work's result. Failures are recorded too,
// then re-thrown so the route still surfaces the error.
export async function recordCronRun(name, work) {
  const startedAt = new Date()

  try {
    const result = await work()

    await saveRun(name, startedAt, true, result, null)

    return result
  } catch (error) {
    await saveRun(name, startedAt, false, null, String(error))
    throw error
  }
}

function saveRun(name, startedAt, ok, result, error) {
  return CronRun.create({
    name,
    started_at: startedAt,
    finished_at: new Date(),
    ok,
    result: result || null,
    error
  })
}
