'use client'

import { Inline } from '@/ui/layout/Inline'
import { Radio } from '@/ui/atoms/Radio'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'

const title = (meeting) => meeting.title || 'Untitled meeting'

export function MeetingWinnerOption({ meeting, checked, onPick }) {
  return (
    <Inline gap="sm">
      <Radio checked={checked} onChange={() => onPick(meeting.id)}
        label="Keep this meeting" />
      <Text size="sm">{title(meeting)}</Text>
      <DateText value={meeting.starts_at} />
    </Inline>
  )
}
