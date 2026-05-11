import { Stack } from '@/ui/Stack'
import { AIBriefing } from './AIBriefing'
import { DocumentMeetingsSection } from './DocumentMeetingsSection'
import { CardsSection } from './cards/CardsSection'
import { UpcomingMeetings } from './UpcomingMeetings'
import { RecentActivity } from './RecentActivity'

export function TodayBody({ data }) {
  return (
    <Stack gap="lg">
      <AIBriefing briefing={data.briefing} />
      <DocumentMeetingsSection rows={data.documentCards} priority="high" />
      <CardsSection cards={data.cards} />
      <DocumentMeetingsSection rows={data.documentCards} priority="normal" />
      <UpcomingMeetings meetings={data.meetings} />
      <RecentActivity entries={data.activity} />
    </Stack>
  )
}
