import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { EditMeeting } from './EditMeeting'
import { MeetingInfo } from './MeetingInfo'
import { MeetingParticipants } from './MeetingParticipants'
import { MeetingNotes } from './MeetingNotes'
import { MeetingResources } from './MeetingResources'

export function MeetingDetail({ meeting, onChanged }) {
  return (
    <Stack gap="lg">
      <Inline gap="sm">
        <Heading gutter="none">{meeting.title}</Heading>
        <EditMeeting meeting={meeting} onSaved={onChanged} />
      </Inline>
      <MeetingInfo meeting={meeting} />
      <MeetingParticipants participants={meeting.participants}
        meetingId={meeting.id} onChanged={onChanged} />
      <MeetingNotes notes={meeting.notes} meetingId={meeting.id}
        onChanged={onChanged} />
      <MeetingResources resources={meeting.resources} />
    </Stack>
  )
}
