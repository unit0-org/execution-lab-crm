import { Inline } from '@/ui/layout/Inline'
import { Chip } from '@/ui/molecules/Chip'

export function AttendeePills({ attendees }) {
  return (
    <Inline gap="sm">
      {attendees.map((attendee) => (
        <Chip key={attendee.id} href={`/contacts/${attendee.id}`}>
          {attendee.name}
        </Chip>
      ))}
    </Inline>
  )
}
