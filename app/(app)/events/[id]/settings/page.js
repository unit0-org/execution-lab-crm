import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { EventSettingsServer } from './EventSettingsServer'

export default function EventSettingsPage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <EventSettingsServer params={params} />
      </Stack>
    </Page>
  )
}
