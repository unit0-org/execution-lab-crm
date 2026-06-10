import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { Text } from '@/ui/atoms/Text'
import { CohortDetailServer } from './CohortDetailServer'

export default function CohortPage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <Link href="/cohorts">← Back to cohorts</Link>
        <Suspense fallback={<Text>Loading…</Text>}>
          <CohortDetailServer params={params} />
        </Suspense>
      </Stack>
    </Page>
  )
}
