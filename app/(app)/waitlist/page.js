import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { WaitlistServer } from './WaitlistServer'
import { WaitlistFallback } from './components/WaitlistFallback'

export default function WaitlistPage() {
  return (
    <Page width="wide">
      <Suspense fallback={<WaitlistFallback />}>
        <WaitlistServer />
      </Suspense>
    </Page>
  )
}
