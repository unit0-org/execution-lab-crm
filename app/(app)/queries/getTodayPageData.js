import { fetchTodayBriefing } from '@/lib/briefings/queries'
import { getUpcomingMeetings } from './getUpcomingMeetings'
import { getRecentActivity } from './getRecentActivity'
import { getDocumentMeetingCards } from './getDocumentMeetingCards'
import { getVisibleCards } from './getVisibleCards'

export async function getTodayPageData(supabase) {
  const [briefing, meetings, activity, documentCards, cards] = await Promise.all([
    fetchTodayBriefing(supabase),
    getUpcomingMeetings(supabase),
    getRecentActivity(supabase),
    getDocumentMeetingCards(supabase),
    getVisibleCards(supabase),
  ])

  return { briefing, meetings, activity, documentCards, cards }
}
