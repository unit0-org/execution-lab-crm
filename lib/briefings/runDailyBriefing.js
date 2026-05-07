import { getTodayFollowUps } from '@/app/(app)/queries/getTodayFollowUps'
import { getUpcomingMeetings } from '@/app/(app)/queries/getUpcomingMeetings'
import { generateBriefing } from '@/lib/ai/briefing'
import { upsertBriefing } from './queries'

// Generate today's briefing from current state and cache it.
// Called from the daily cron after sync completes.
export async function runDailyBriefing(supabase) {
  const [flags, meetings] = await Promise.all([
    getTodayFollowUps(supabase),
    getUpcomingMeetings(supabase),
  ])
  const body = await generateBriefing({ flags, meetings })
  if (body) await upsertBriefing(supabase, body)
}
