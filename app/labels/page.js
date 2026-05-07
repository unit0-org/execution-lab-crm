import { createClient } from '@/lib/supabase/server'
import { fetchLabels } from '@/lib/labels/queries'
import { Page } from '@/ui/Page'
import { Stack } from '@/ui/Stack'
import { LabelsHeader } from './components/LabelsHeader'
import { CreateLabelSection } from './components/CreateLabelSection'
import { AllLabelsSection } from './components/AllLabelsSection'

export const dynamic = 'force-dynamic'

export default async function LabelsPage() {
  const supabase = await createClient()
  const labels = await fetchLabels(supabase)

  return (
    <Page width="wide">
      <LabelsHeader />
      <Stack gap="lg">
        <CreateLabelSection />
        <AllLabelsSection labels={labels} />
      </Stack>
    </Page>
  )
}
