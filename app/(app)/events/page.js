import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { EventsServer } from './EventsServer'
import { EventsSkeleton } from './components/EventsSkeleton'

export const dynamic = 'force-dynamic'

export default function EventsPage() {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Events</Heading>
        <Link href="/events/import">Import CSV</Link>
        <Suspense fallback={<EventsSkeleton />}>
          <EventsServer />
        </Suspense>
      </Stack>
    </Page>
  )
}
