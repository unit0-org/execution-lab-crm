'use client'

import { useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { SurvivorChoices } from './SurvivorChoices'
import { MergeSummary } from './MergeSummary'
import { MergeConfirm } from './MergeConfirm'
import { planMerge } from '../hooks/planMerge'
import { mergeConflicts } from '../hooks/mergeConflicts'

// The choice on offer is not "whose data survives" — all of it does. It is
// only which version of a disagreeing field the merged contact keeps, so the
// modal says that, and asks nothing when nothing disagrees.
export function MergeReview({ contacts, onConfirm, onCancel }) {
  const conflicts = mergeConflicts(contacts)
  const planned = planMerge(contacts).winnerId
  const [winnerId, setWinnerId] = useState(planned || contacts[0]?.id)

  return (
    <Stack gap="md">
      <MergeSummary conflicts={conflicts} />
      <SurvivorChoices contacts={contacts} conflicts={conflicts}
        winnerId={winnerId} onPick={setWinnerId} />
      <Text size="sm">This cannot be undone.</Text>
      <MergeConfirm winnerId={winnerId} onConfirm={onConfirm}
        onCancel={onCancel} />
    </Stack>
  )
}
