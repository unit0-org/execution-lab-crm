import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { CohortDetailServer } from './CohortDetailServer'

export default function CohortPage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <CohortDetailServer params={params} />
      </Stack>
    </Page>
  )
}
