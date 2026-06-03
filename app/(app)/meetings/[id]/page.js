import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { MeetingDetailView } from '../components/MeetingDetailView'

export default function MeetingPage() {
  return (
    <Page>
      <Stack gap="md">
        <Link href="/meetings">← Back to meetings</Link>
        <MeetingDetailView />
      </Stack>
    </Page>
  )
}
