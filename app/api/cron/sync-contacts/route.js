import { syncEnabledOrgIds, syncContactsForOrg }
  from '@/lib/google/contacts'
import { authorizeCron } from './authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Daily cron: sync Google Contacts for every org that has it enabled.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const orgIds = await syncEnabledOrgIds()

  for (const orgId of orgIds)
    await syncContactsForOrg(orgId)

  return Response.json({ ok: true, orgs: orgIds.length })
}
