import { createClient } from '@/lib/supabase/server'
import { Page } from '@/ui/Page'
import { Stack } from '@/ui/Stack'
import { getTodayPageData } from './queries/getTodayPageData'
import { TodayHeader } from './components/today/TodayHeader'
import { AIBriefing } from './components/today/AIBriefing'
import { DocumentMeetingsSection } from './components/today/DocumentMeetingsSection'
import { TodayFollowUps } from './components/today/TodayFollowUps'
import { UpcomingMeetings } from './components/today/UpcomingMeetings'
import { RecentActivity } from './components/today/RecentActivity'

export const dynamic = 'force-dynamic'

export default async function TodayPage() {
  const supabase = await createClient()
  const data = await getTodayPageData(supabase)

  return (
    <Page width="wide">
      <TodayHeader />
      <Stack gap="lg">
        <AIBriefing briefing={data.briefing} />
        <DocumentMeetingsSection rows={data.documentCards} />
        <TodayFollowUps flags={data.flags} />
        <UpcomingMeetings meetings={data.meetings} />
        <RecentActivity entries={data.activity} />
      </Stack>
    </Page>
  )
}
