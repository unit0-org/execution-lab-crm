import { NextResponse } from 'next/server'
import { isAuthorizedCron } from '@/lib/auth/cron'
import { createServiceClient } from '@/lib/supabase/serviceClient'
import { syncAllMeetAccounts } from '@/lib/sync/meet/syncAllAccounts'

export const dynamic = 'force-dynamic'
export const maxDuration = 60 // seconds — Vercel Hobby cap. Sync is resumable via meet_synced_at.

export async function GET(request) {
  if (!isAuthorizedCron(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const supabase = createServiceClient()
  const report = await syncAllMeetAccounts(supabase)

  return NextResponse.json({ ok: true, report })
}
