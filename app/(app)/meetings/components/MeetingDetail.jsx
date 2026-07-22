import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { PageHeader } from '@/ui/organisms/PageHeader'
import { EditMeeting } from './EditMeeting'
import { MeetingInfo } from './MeetingInfo'
import { MeetingParticipants } from './MeetingParticipants'
import { MeetingNotes } from './MeetingNotes'
import { MeetingResources } from './MeetingResources'

export function MeetingDetail({ meeting, onChanged }) {
  return (
    <Stack gap="lg">
      <PageHeader title={<Heading gutter="none">{meeting.title}</Heading>}
        actions={<EditMeeting meeting={meeting} onSaved={onChanged} />} />
      <MeetingInfo meeting={meeting} />
      <MeetingParticipants participants={meeting.participants}
        meetingId={meeting.id} onChanged={onChanged} />
      <MeetingNotes notes={meeting.notes} meetingId={meeting.id}
        onChanged={onChanged} />
      <MeetingResources resources={meeting.resources} />
    </Stack>
  )
}
