import { Page } from '@/ui/layout/Page'
import { CohortEditServer } from './CohortEditServer'

export default function EditCohortPage({ params }) {
  return (
    <Page>
      <CohortEditServer params={params} />
    </Page>
  )
}
