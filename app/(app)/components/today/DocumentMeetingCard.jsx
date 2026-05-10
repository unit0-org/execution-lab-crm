import { Card } from '@/ui/Card'
import { Stack } from '@/ui/Stack'
import { Text } from '@/ui/Text'
import { MeetingHeadline } from './MeetingHeadline'
import { DocumentMeetingForm } from './DocumentMeetingForm'

export function DocumentMeetingCard({ row }) {
  return (
    <Card tone={row.priority === 'high' ? 'attention' : undefined}>
      <Stack gap="md">
        <MeetingHeadline row={row} />
        <Text tone="muted">What did you talk about?</Text>
        <DocumentMeetingForm meetingId={row.id} />
      </Stack>
    </Card>
  )
}
