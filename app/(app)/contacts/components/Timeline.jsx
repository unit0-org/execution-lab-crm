'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { useTimeline } from '../hooks/useTimeline'
import { TimelineBody } from './TimelineBody'

export function Timeline({ contactId }) {
  const entries = useTimeline(contactId)

  return (
    <Stack gap="sm">
      <Heading level={3}>Activity</Heading>
      <TimelineBody entries={entries} />
    </Stack>
  )
}
