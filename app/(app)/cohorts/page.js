import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { CohortsServer } from './CohortsServer'
import { CohortsListFallback } from './components/CohortsListFallback'

export default function CohortsPage() {
  return (
    <Page width="wide">
      <Suspense fallback={<CohortsListFallback />}>
        <CohortsServer />
      </Suspense>
    </Page>
  )
}
