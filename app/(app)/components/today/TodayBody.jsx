import { Stack } from '@/ui/Stack'
import { AIBriefing } from './AIBriefing'
import { DocumentMeetingsSection } from './DocumentMeetingsSection'
import { CardsSection } from './cards/CardsSection'
import { TodayFollowUps } from './TodayFollowUps'
import { UpcomingMeetings } from './UpcomingMeetings'
import { RecentActivity } from './RecentActivity'

export function TodayBody({ data }) {
  return (
    <Stack gap="lg">
      <AIBriefing briefing={data.briefing} />
      <DocumentMeetingsSection rows={data.documentCards} priority="high" />
      <CardsSection cards={data.cards} />
      <DocumentMeetingsSection rows={data.documentCards} priority="normal" />
      <TodayFollowUps flags={data.flags} />
      <UpcomingMeetings meetings={data.meetings} />
      <RecentActivity entries={data.activity} />
    </Stack>
  )
}
