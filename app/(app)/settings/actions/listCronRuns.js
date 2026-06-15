'use server'

import { listCronRuns } from '@/lib/cron/controllers/listCronRuns'

export async function listCronRunsAction() {
  return listCronRuns()
}
