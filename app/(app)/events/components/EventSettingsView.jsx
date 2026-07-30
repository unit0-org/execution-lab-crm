'use client'

import { Stack } from '@/ui/layout/Stack'
import { PageHeader } from '@/ui/organisms/PageHeader'
import { Heading } from '@/ui/atoms/Heading'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { LinkedinConversionForm } from './LinkedinConversionForm'
import { useConversionSettings } from '../hooks/useConversionSettings'

export function EventSettingsView({ event, initialSettings }) {
  const state = useConversionSettings(event.id, initialSettings)
  const title = <Heading gutter="none">{event.title} · Settings</Heading>
  const back = (
    <ButtonLink href={`/events/${event.id}`}>Back to event</ButtonLink>
  )

  return (
    <Stack gap="lg">
      <PageHeader title={title} actions={back} />
      <LinkedinConversionForm eventId={event.id}
        settings={state.settings} onChanged={state.refresh} />
    </Stack>
  )
}
