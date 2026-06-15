import { listCronRunsAction } from './actions/listCronRuns'
import { CronHistoryView } from './components/CronHistoryView'

// Server-side load for the cron history tab.
export async function CronHistoryServer() {
  const runs = await listCronRunsAction()

  return <CronHistoryView runs={runs} />
}
