'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { useContactAnswers } from '../hooks/useContactAnswers'
import { NuggetList } from './NuggetList'

export function ContactAnswers({ contactId }) {
  const nuggets = useContactAnswers(contactId)

  if (!nuggets || !nuggets.length) return null

  return (
    <Stack gap="sm">
      <Heading level={3}>What we know</Heading>
      <NuggetList nuggets={nuggets} />
    </Stack>
  )
}
