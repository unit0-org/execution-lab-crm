import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { CohortsServer } from './CohortsServer'
import { CohortsListFallback } from './components/CohortsListFallback'
import { WaitlistServer } from '../waitlist/WaitlistServer'
import { WaitlistFallback } from '../waitlist/components/WaitlistFallback'

export default function CohortsPage() {
  return (
    <Page width="wide">
      <Stack gap="lg">
        <Suspense fallback={<CohortsListFallback />}>
          <CohortsServer />
        </Suspense>
        <Suspense fallback={<WaitlistFallback />}>
          <WaitlistServer />
        </Suspense>
      </Stack>
    </Page>
  )
}
