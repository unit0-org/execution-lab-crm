import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { EventDetailServer } from './EventDetailServer'

export default function EventPage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <EventDetailServer params={params} />
      </Stack>
    </Page>
  )
}
