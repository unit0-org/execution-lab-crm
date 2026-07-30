import { PageHeader } from '@/ui/organisms/PageHeader'
import { Heading } from '@/ui/atoms/Heading'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { EditEvent } from './EditEvent'

export function EventHeader({ event, onChanged }) {
  const actions = (
    <>
      <ButtonLink href={`/events/${event.id}/settings`}>Settings</ButtonLink>
      <EditEvent event={event} onSaved={onChanged} />
    </>
  )

  return (
    <PageHeader title={<Heading gutter="none">{event.title}</Heading>}
      actions={actions} />
  )
}
