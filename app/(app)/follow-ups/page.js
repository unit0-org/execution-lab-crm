import { createClient } from '@/lib/supabase/server'
import { Page } from '@/ui/Page'
import { Heading } from '@/ui/Heading'
import { fetchOpenFollowUps } from '@/lib/follow_ups/queries'
import { groupByDue } from '@/lib/follow_ups/groupByDue'
import { GroupedList } from './components/GroupedList'

export const dynamic = 'force-dynamic'

export default async function FollowUpsPage() {
  const supabase = await createClient()
  const flags = await fetchOpenFollowUps(supabase)
  const groups = groupByDue(flags)

  return (
    <Page width="wide">
      <Heading gutter="lg">Follow-ups</Heading>
      <GroupedList groups={groups} />
    </Page>
  )
}
