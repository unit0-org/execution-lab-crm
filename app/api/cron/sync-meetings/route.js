import { NextResponse } from 'next/server'
import { isAuthorizedCron } from '@/lib/auth/cron'
import { createServiceClient } from '@/lib/supabase/serviceClient'
import { syncAllMeetAccounts } from '@/lib/sync/meet/syncAllAccounts'

export const dynamic = 'force-dynamic'
export const maxDuration = 300 // seconds — Vercel hobby cap is 60, Pro is 300

export async function GET(request) {
  if (!isAuthorizedCron(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const supabase = createServiceClient()
  const report = await syncAllMeetAccounts(supabase)

  return NextResponse.json({ ok: true, report })
}
