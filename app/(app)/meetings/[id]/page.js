import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { MeetingDetailView } from '../components/MeetingDetailView'

export default function MeetingPage() {
  return (
    <Page>
      <Stack gap="md">
        <MeetingDetailView />
      </Stack>
    </Page>
  )
}
