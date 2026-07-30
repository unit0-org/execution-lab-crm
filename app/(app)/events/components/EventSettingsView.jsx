'use client'

import { Stack } from '@/ui/layout/Stack'
import { PageHeader } from '@/ui/organisms/PageHeader'
import { Heading } from '@/ui/atoms/Heading'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { LinkedinConversionForm } from './LinkedinConversionForm'
import { useEventConversion } from '../hooks/useEventConversion'

export function EventSettingsView({ event, initialConversion }) {
  const state = useEventConversion(event.id, initialConversion)
  const title = <Heading gutter="none">{event.title} · Settings</Heading>
  const back = (
    <ButtonLink href={`/events/${event.id}`}>Back to event</ButtonLink>
  )

  return (
    <Stack gap="lg">
      <PageHeader title={title} actions={back} />
      <LinkedinConversionForm eventId={event.id}
        conversion={state.conversion} onChanged={state.refresh} />
    </Stack>
  )
}
