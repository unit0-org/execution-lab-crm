'use client'

import { useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { SurvivorChoices } from './SurvivorChoices'
import { MergeConfirm } from './MergeConfirm'
import { planMerge } from '../hooks/planMerge'

// Preselects the survivor when the names agree; the choice is still shown,
// and still confirmed, because the contacts not kept are deleted for good.
export function MergeReview({ contacts, onConfirm, onCancel }) {
  const planned = planMerge(contacts).winnerId
  const [winnerId, setWinnerId] = useState(planned || contacts[0]?.id)

  return (
    <Stack gap="md">
      <Heading level={3}>Merge contacts</Heading>
      <SurvivorChoices contacts={contacts} winnerId={winnerId}
        onPick={setWinnerId} />
      <Text size="sm">
        The contacts you do not keep are deleted. This cannot be undone.
      </Text>
      <MergeConfirm winnerId={winnerId} onConfirm={onConfirm}
        onCancel={onCancel} />
    </Stack>
  )
}
