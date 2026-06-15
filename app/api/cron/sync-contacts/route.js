import { syncContacts } from '@/lib/google/contacts'
import { recordCronRun } from '@/lib/cron/controllers/recordCronRun'
import { authorizeCron } from './authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Daily cron: sync Google Contacts for every enabled account.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const result = await recordCronRun('sync-contacts', syncContacts)

  return Response.json({ ok: true, ...result })
}
