import { CronRun } from '../models/CronRun'

// Recent cron runs, newest first, for the admin history view.
export function listCronRuns(limit = 100) {
  return CronRun.findAll({
    order: [['started_at', 'DESC']],
    limit
  }).then(runs => runs.map(run => run.toJSON()))
}
