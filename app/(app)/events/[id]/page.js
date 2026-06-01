import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { EventDetailView } from '../components/EventDetailView'

export default function EventPage() {
  return (
    <Page>
      <Stack gap="md">
        <Link href="/events">← Back to events</Link>
        <EventDetailView />
      </Stack>
    </Page>
  )
}
