import { fetchTodayBriefing } from '@/lib/briefings/queries'
import { getTodayFollowUps } from './getTodayFollowUps'
import { getUpcomingMeetings } from './getUpcomingMeetings'
import { getRecentActivity } from './getRecentActivity'
import { getDocumentMeetingCards } from './getDocumentMeetingCards'

export async function getTodayPageData(supabase) {
  const [briefing, flags, meetings, activity, documentCards] = await Promise.all([
    fetchTodayBriefing(supabase),
    getTodayFollowUps(supabase),
    getUpcomingMeetings(supabase),
    getRecentActivity(supabase),
    getDocumentMeetingCards(supabase),
  ])

  return { briefing, flags, meetings, activity, documentCards }
}
