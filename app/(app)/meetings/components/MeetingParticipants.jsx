import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Inline } from '@/ui/layout/Inline'
import { ParticipantChip } from './ParticipantChip'
import { AddParticipant } from './AddParticipant'

export function MeetingParticipants({ participants, meetingId, onChanged }) {
  return (
    <Stack gap="sm">
      <Heading level={3}>Participants</Heading>
      <Inline gap="sm">
        {participants.map((person) => (
          <ParticipantChip key={person.pid} person={person}
            onChanged={onChanged} />
        ))}
      </Inline>
      <AddParticipant meetingId={meetingId} onChanged={onChanged} />
    </Stack>
  )
}
