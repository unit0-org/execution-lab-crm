import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { MeetingsServer } from './MeetingsServer'
import { MeetingsSkeleton } from './components/MeetingsSkeleton'

export const dynamic = 'force-dynamic'

export default function MeetingsPage() {
  return (
    <Page width="wide">
      <Suspense fallback={<MeetingsSkeleton />}>
        <MeetingsServer />
      </Suspense>
    </Page>
  )
}
