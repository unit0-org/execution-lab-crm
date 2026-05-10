import { createClient } from '@/lib/supabase/server'
import { Page } from '@/ui/Page'
import { getTodayPageData } from './queries/getTodayPageData'
import { TodayHeader } from './components/today/TodayHeader'
import { TodayBody } from './components/today/TodayBody'

export const dynamic = 'force-dynamic'

export default async function TodayPage() {
  const supabase = await createClient()
  const data = await getTodayPageData(supabase)

  return (
    <Page width="wide">
      <TodayHeader />
      <TodayBody data={data} />
    </Page>
  )
}
