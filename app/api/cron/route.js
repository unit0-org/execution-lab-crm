import { runAllJobs } from '@/lib/cron/controllers/runAllJobs'
import { runJob } from '@/lib/cron/controllers/runJob'
import { authorizeCron } from './authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Cron entrypoint. `?job=<name>` runs just that job — so a frequent
// scheduler can drive meeting sync on its own — otherwise the full daily
// run of every job in order.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const job = new URL(request.url).searchParams.get('job')
  const ran = job ? [await runJob(job)] : await runAllJobs()

  return Response.json({ ok: true, ran })
}
