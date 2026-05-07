import { getTodayFollowUps } from './getTodayFollowUps'
import { getUpcomingMeetings } from './getUpcomingMeetings'
import { getRecentActivity } from './getRecentActivity'

export async function getTodayPageData(supabase) {
  const [flags, meetings, activity] = await Promise.all([
    getTodayFollowUps(supabase),
    getUpcomingMeetings(supabase),
    getRecentActivity(supabase),
  ])

  return { flags, meetings, activity }
}
