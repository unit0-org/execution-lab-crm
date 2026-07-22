import { PageHeader } from '@/ui/organisms/PageHeader'
import { Heading } from '@/ui/atoms/Heading'
import { EditEvent } from './EditEvent'

export function EventHeader({ event, onChanged }) {
  return (
    <PageHeader title={<Heading gutter="none">{event.title}</Heading>}
      actions={<EditEvent event={event} onSaved={onChanged} />} />
  )
}
