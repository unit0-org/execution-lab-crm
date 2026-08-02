import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Link } from '@/ui/atoms/Link'
import { EventsServer } from './EventsServer'

export const dynamic = 'force-dynamic'

export default function EventsPage({ searchParams }) {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Events</Heading>
        <Inline gap="md">
          <Link href="/events/participants">All participants</Link>
          <Link href="/events/import">Import CSV</Link>
        </Inline>
        <EventsServer searchParams={searchParams} />
      </Stack>
    </Page>
  )
}
