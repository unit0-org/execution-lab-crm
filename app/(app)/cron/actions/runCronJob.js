'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { runJob } from '@/lib/cron/controllers/runJob'

const handle = (_org, name) => runJob(name)

export const runCronJobAction = withAdmin(handle)
