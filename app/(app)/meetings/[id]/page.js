import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { MeetingDetailServer } from './MeetingDetailServer'

export default function MeetingPage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <MeetingDetailServer params={params} />
      </Stack>
    </Page>
  )
}
