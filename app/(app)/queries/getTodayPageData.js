import { fetchTodayBriefing } from '@/lib/briefings/queries'
import { getTodayFollowUps } from './getTodayFollowUps'
import { getUpcomingMeetings } from './getUpcomingMeetings'
import { getRecentActivity } from './getRecentActivity'

export async function getTodayPageData(supabase) {
  const [briefing, flags, meetings, activity] = await Promise.all([
    fetchTodayBriefing(supabase),
    getTodayFollowUps(supabase),
    getUpcomingMeetings(supabase),
    getRecentActivity(supabase),
  ])

  return { briefing, flags, meetings, activity }
}
