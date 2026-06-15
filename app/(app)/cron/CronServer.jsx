import { forbidden } from 'next/navigation'
import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { listCronJobs } from '@/lib/cron/controllers/listCronJobs'
import { listCronRuns } from '@/lib/cron/controllers/listCronRuns'
import { CronView } from './components/CronView'
import { attachLatestRun } from './components/attachLatestRun'

// Admin-only: the cron operations, each with its last run + a Run button.
export async function CronServer() {
  const membership = await currentMembership()

  if (membership?.role !== 'admin') forbidden()

  const runs = await listCronRuns()
  const jobs = attachLatestRun(listCronJobs(), runs)

  return <CronView jobs={jobs} />
}
