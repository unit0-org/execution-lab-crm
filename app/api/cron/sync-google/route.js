import { NextResponse } from 'next/server'
import { isAuthorizedCron } from '@/lib/auth/cron'
import { createServiceClient } from '@/lib/supabase/serviceClient'
import { syncAllSources } from '@/lib/sync/syncAllSources'
import { runDailyBriefing } from '@/lib/briefings/runDailyBriefing'
import { createDormantCards } from '@/lib/dormant/createDormantCards'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function GET(request) {
  if (!isAuthorizedCron(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const supabase = createServiceClient()
  const report  = await syncAllSources(supabase)
  await runDailyBriefing(supabase)
  const dormant = await createDormantCards(supabase)

  return NextResponse.json({ ok: true, report, dormant })
}
