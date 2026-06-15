import { runAllJobs } from '@/lib/cron/controllers/runAllJobs'
import { authorizeCron } from './authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// The single daily cron: run every scheduled job in order, logging each.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const ran = await runAllJobs()

  return Response.json({ ok: true, ran })
}
