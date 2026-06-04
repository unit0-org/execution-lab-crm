import { Inline } from '@/ui/layout/Inline'
import { Chip } from '@/ui/molecules/Chip'
import { RemoveParticipant } from './RemoveParticipant'

export function ParticipantChip({ person, onChanged }) {
  return (
    <Inline gap="sm">
      <Chip href={`/contacts/${person.id}`}>{person.name}</Chip>
      <RemoveParticipant id={person.pid} onChanged={onChanged} />
    </Inline>
  )
}
