import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Text } from '@/ui/atoms/Text'
import { CohortEditServer } from './CohortEditServer'

export default function EditCohortPage({ params }) {
  return (
    <Page>
      <Suspense fallback={<Text>Loading…</Text>}>
        <CohortEditServer params={params} />
      </Suspense>
    </Page>
  )
}
