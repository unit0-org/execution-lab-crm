import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { EventDetailView } from '../components/EventDetailView'

export default function EventPage() {
  return (
    <Page>
      <Stack gap="md">
        <EventDetailView />
      </Stack>
    </Page>
  )
}
