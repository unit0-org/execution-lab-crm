import { NextResponse } from 'next/server'
import { isAuthorizedCron } from '@/lib/auth/cron'
import { createServiceClient } from '@/lib/supabase/serviceClient'
import { syncAllSources } from '@/lib/sync/syncAllSources'

export const dynamic = 'force-dynamic'
export const maxDuration = 60 // Hobby cap; sources resume via per-source watermarks.

export async function GET(request) {
  if (!isAuthorizedCron(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const supabase = createServiceClient()
  const report = await syncAllSources(supabase)

  return NextResponse.json({ ok: true, report })
}
