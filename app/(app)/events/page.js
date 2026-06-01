import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { EventsView } from './components/EventsView'

export default function EventsPage() {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Events</Heading>
        <Link href="/events/import">Import CSV</Link>
        <EventsView />
      </Stack>
    </Page>
  )
}
