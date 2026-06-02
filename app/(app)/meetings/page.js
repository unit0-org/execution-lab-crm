import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { MeetingsView } from './components/MeetingsView'

export default function MeetingsPage() {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Meetings</Heading>
        <MeetingsView />
      </Stack>
    </Page>
  )
}
