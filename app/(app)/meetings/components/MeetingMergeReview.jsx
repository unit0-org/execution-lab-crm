'use client'

import { useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { MeetingWinnerChoices } from './MeetingWinnerChoices'
import { MeetingMergeConfirm } from './MeetingMergeConfirm'

export function MeetingMergeReview({ meetings, onConfirm, onCancel }) {
  const [winnerId, setWinnerId] = useState(meetings[0]?.id)

  return (
    <Stack gap="md">
      <Heading level={3}>Merge meetings</Heading>
      <MeetingWinnerChoices meetings={meetings} winnerId={winnerId}
        onPick={setWinnerId} />
      <MeetingMergeConfirm winnerId={winnerId} onConfirm={onConfirm}
        onCancel={onCancel} />
    </Stack>
  )
}
