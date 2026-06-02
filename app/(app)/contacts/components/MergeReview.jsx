'use client'

import { useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { SurvivorChoices } from './SurvivorChoices'
import { MergeConfirm } from './MergeConfirm'

export function MergeReview({ contacts, onConfirm, onCancel }) {
  const [winnerId, setWinnerId] = useState(contacts[0]?.id)

  return (
    <Stack gap="md">
      <Heading level={3}>Merge contacts</Heading>
      <SurvivorChoices contacts={contacts} winnerId={winnerId}
        onPick={setWinnerId} />
      <MergeConfirm winnerId={winnerId} onConfirm={onConfirm}
        onCancel={onCancel} />
    </Stack>
  )
}
