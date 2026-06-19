'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { MeetingWinnerOption } from './MeetingWinnerOption'

export function MeetingWinnerChoices({ meetings, winnerId, onPick }) {
  return (
    <Stack gap="sm">
      <Text size="sm">Which meeting to keep?</Text>
      {meetings.map((meeting) => (
        <MeetingWinnerOption key={meeting.id} meeting={meeting}
          checked={meeting.id === winnerId} onPick={onPick} />
      ))}
    </Stack>
  )
}
