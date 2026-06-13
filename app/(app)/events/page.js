import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { EventsServer } from './EventsServer'

export const dynamic = 'force-dynamic'

export default function EventsPage() {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Events</Heading>
        <Link href="/events/import">Import CSV</Link>
        <EventsServer />
      </Stack>
    </Page>
  )
}
