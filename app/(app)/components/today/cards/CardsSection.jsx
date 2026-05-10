import { TodaySection } from '../TodaySection'
import { MeetingGroup } from './MeetingGroup'
import { groupByMeeting } from '@/lib/cards/groupByMeeting'

export function CardsSection({ cards }) {
  const groups = groupByMeeting(cards)

  return (
    <TodaySection
      title="Pending decisions"
      count={cards.length}
      empty="No pending action items, facts, or follow-ups."
    >
      {groups.map((g) => <MeetingGroup key={g.meetingId || 'free'} group={g} />)}
    </TodaySection>
  )
}
