import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Inline } from '@/ui/layout/Inline'
import { Chip } from '@/ui/molecules/Chip'

export function MeetingParticipants({ participants }) {
  return (
    <Stack gap="sm">
      <Heading level={3}>Participants</Heading>
      <Inline gap="sm">
        {participants.map((person) => (
          <Chip key={person.id} href={`/contacts/${person.id}`}>
            {person.name}
          </Chip>
        ))}
      </Inline>
    </Stack>
  )
}
