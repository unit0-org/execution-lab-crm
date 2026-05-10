import { fetchTodayBriefing } from '@/lib/briefings/queries'
import { getTodayFollowUps } from './getTodayFollowUps'
import { getUpcomingMeetings } from './getUpcomingMeetings'
import { getRecentActivity } from './getRecentActivity'
import { getDocumentMeetingCards } from './getDocumentMeetingCards'
import { getVisibleCards } from './getVisibleCards'

export async function getTodayPageData(supabase) {
  const [briefing, flags, meetings, activity, documentCards, cards] = await Promise.all([
    fetchTodayBriefing(supabase),
    getTodayFollowUps(supabase),
    getUpcomingMeetings(supabase),
    getRecentActivity(supabase),
    getDocumentMeetingCards(supabase),
    getVisibleCards(supabase),
  ])

  return { briefing, flags, meetings, activity, documentCards, cards }
}
