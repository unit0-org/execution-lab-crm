import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { EditEvent } from './EditEvent'

export function EventHeader({ event, onChanged }) {
  return (
    <Inline gap="sm">
      <Heading gutter="none">{event.title}</Heading>
      <EditEvent event={event} onSaved={onChanged} />
    </Inline>
  )
}
