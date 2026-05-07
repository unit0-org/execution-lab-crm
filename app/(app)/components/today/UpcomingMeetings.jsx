import { TodaySection } from './TodaySection'
import { MeetingRow } from './MeetingRow'

export function UpcomingMeetings({ meetings }) {
  return (
    <TodaySection title="Upcoming meetings" count={meetings.length} empty="Nothing on the calendar this week.">
      {meetings.map((m) => <MeetingRow key={m.id} meeting={m} />)}
    </TodaySection>
  )
}
