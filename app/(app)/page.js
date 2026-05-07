import { createClient } from '@/lib/supabase/server'
import { Page } from '@/ui/Page'
import { Heading } from '@/ui/Heading'
import { Stack } from '@/ui/Stack'
import { getTodayPageData } from './queries/getTodayPageData'
import { TodayFollowUps } from './components/today/TodayFollowUps'
import { UpcomingMeetings } from './components/today/UpcomingMeetings'
import { RecentActivity } from './components/today/RecentActivity'

export const dynamic = 'force-dynamic'

export default async function TodayPage() {
  const supabase = await createClient()
  const { flags, meetings, activity } = await getTodayPageData(supabase)

  return (
    <Page width="wide">
      <Heading gutter="lg">Today</Heading>
      <Stack gap="lg">
        <TodayFollowUps flags={flags} />
        <UpcomingMeetings meetings={meetings} />
        <RecentActivity entries={activity} />
      </Stack>
    </Page>
  )
}
