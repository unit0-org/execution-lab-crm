import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { MeetingInfo } from './MeetingInfo'
import { MeetingParticipants } from './MeetingParticipants'
import { MeetingResources } from './MeetingResources'

export function MeetingDetail({ meeting }) {
  return (
    <Stack gap="lg">
      <Heading gutter="none">{meeting.title}</Heading>
      <MeetingInfo meeting={meeting} />
      <MeetingParticipants participants={meeting.participants} />
      <MeetingResources resources={meeting.resources} />
    </Stack>
  )
}
